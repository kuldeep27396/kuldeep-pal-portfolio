import json
import re
import html

def extract_linkedin_articles(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    articles = []
    seen_links = set()

    # Find all occurrences of "text":"..." and "actionTarget":".../pulse/..."
    text_matches = []
    for m in re.finditer(r'&quot;text&quot;:&quot;([^&]{20,200})&quot;', content):
        text_matches.append((m.start(), html.unescape(m.group(1))))
    
    url_matches = []
    for m in re.finditer(r'&quot;actionTarget&quot;:&quot;(https://www.linkedin.com/pulse/[^&]+)&quot;', content):
        url_matches.append((m.start(), m.group(1)))

    # Pair them up
    for url_pos, url in url_matches:
        best_title = None
        min_dist = float('inf')
        
        # In LinkedIn's JSON, the title often follows or precedes the URL in a nearby object
        for text_pos, text in text_matches:
            dist = abs(url_pos - text_pos)
            if dist < 3000:
                if dist < min_dist:
                    min_dist = dist
                    best_title = text
        
        if best_title:
            link = url.split('?')[0]
            if link not in seen_links:
                articles.append({"title": best_title, "link": link})
                seen_links.add(link)

    return articles

if __name__ == "__main__":
    arts = extract_linkedin_articles('/Users/kuldeep/Downloads/LinkedIn.html')
    # Filter junk
    filtered = []
    for a in arts:
        t = a['title'].lower()
        if any(x in t for x in ['published on', 'sign in', 'join now', 'report this', 'view profile', 'comments', 'likes']): continue
        if len(a['title']) < 25: continue
        filtered.append(a)
    
    # Sort by title length as a heuristic for better titles
    print(json.dumps(filtered, indent=2))
