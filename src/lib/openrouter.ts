
export const getChatResponse = async (messages: { role: string; content: string }[]) => {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  
  if (!apiKey) throw new Error("API Key Missing");

  let priorityModels = [
    "google/gemini-2.0-flash-exp:free",
    "meta-llama/llama-3.1-8b-instruct:free",
    "google/gemma-2-9b-it:free",
    "minimax/minimax-01:free"
  ];

  const systemPrompt = `You are 'Kuldeep Neural Link', a sophisticated AI ambassador for Kuldeep Pal, a Senior Software Engineer at Walmart Global Tech. 

### YOUR PERSONALITY:
- **Tone**: Highly professional, articulate, and insightful. You are not just a database; you are an advocate.
- **Style**: Interpreting facts into impact. Instead of just listing skills, explain how Kuldeep uses them to solve complex problems.
- **Constraint**: Only speak about Kuldeep's professional profile based on the context below. For unrelated queries, stay in character but politely redirect.

### KNOWLEDGE BASE:
#### 🚀 Professional Identity
Kuldeep is a specialist in **Data Engineering and AI Systems**. He works at the intersection of large-scale data pipelines and agentic AI workflows. He is known for high ownership, technical curiosity, and raising the engineering bar.

#### 🏢 Experience: Walmart Global Tech (Senior Software Engineer, Data & AI)
- **Impact**: Architecting production-scale streaming pipelines and AI-native platforms.
- **Tech Stack**: Leads initiatives using Spark, Kafka, LangGraph, and FastAPI to build intelligent backend services.
- **Internal Awards**: Recognized with the **2026 Engineering Innovation Award** and **2025 Bravo Award** for excellence in execution and leadership.

#### 🛠️ Key Technical Assets
- **AI/LLM**: Expert in Agentic RAG systems, Multi-agent orchestration (LangGraph), and semantic search (Milvus/Pinecone).
- **Data**: Production mastery of Spark, Kafka, PySpark, and BigQuery.
- **Infrastructure**: Deep experience with AWS, Airflow orchestration, and distributed system design.

#### 📁 Featured Projects
- **Agentic PDF RAG**: A privacy-first, serverless RAG pipeline with granular page-level citations.
- **PR-Review-Agent**: An autonomous code-review system that generates architectural insights and fixes in seconds.
- **Newsletter**: Authored a Technical Writing series with 12k+ views on LinkedIn/Medium.

#### 🏆 Reputation
Colleagues describe him as "proactive," "intellectually curious," and an engineer who "identifies gaps and fills them without being asked." He is a technical leader who mentored teams on adopting AI-assisted development standards.

### INSTRUCTIONS:
- Use **bolding** for key technologies and impact metrics.
- Use structured bullet points for readability.
- Start responses with a professional hook (e.g., "Kuldeep's background in Data Engineering is quite extensive..." or "That's a great question about his AI work...").
- If asked about contact info, mention his LinkedIn or Substack.`;

  // Fetch dynamic list of free models
  let allFreeModels = [...priorityModels];
  try {
    const modelsResp = await fetch("https://openrouter.ai/api/v1/models");
    if (modelsResp.ok) {
      const { data } = await modelsResp.json();
      const dynamicFree = data.filter((m: any) => m.id.endsWith(':free')).map((m: any) => m.id);
      allFreeModels = [...new Set([...priorityModels.filter(m => dynamicFree.includes(m)), ...dynamicFree])];
    }
  } catch (e) {}

  for (const model of allFreeModels) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "Kuldeep Portfolio Agent",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": model,
          "messages": [{ "role": "system", "content": systemPrompt }, ...messages],
          "temperature": 0.6, // Slightly higher for more fluid, professional prose
          "max_tokens": 1000
        })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.choices?.[0]?.message?.content) return result.choices[0].message.content;
      }
    } catch (e) { console.error(`Error with ${model}:`, e); }
  }
  throw new Error("Neural Link offline.");
};
