/* eslint-disable */
export type ArticleItem = {
  title: string;
  source: "linkedin" | "medium";
  sourceLabel: string;
  date: string;
  isoDate: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
};

export const sourceLinks = {
  "linkedin": "https://www.linkedin.com/newsletters/software-data-engineering-6983848189787271168/",
  "medium": "https://kuldeep27396.medium.com/"
} as const;

export const highlightTags = [
  "LinkedIn Newsletter",
  "Medium",
  "Data Engineering",
  "Backend",
  "AI",
  "data",
  "spark",
  "spark-sql",
  "ipl",
  "cricket",
  "security",
  "fraud-detection"
] as const;

export const lastUpdated = "2026-03-07T18:13:55.432Z";

export const articles: ArticleItem[] = [
  {
    "title": "Automating My Learning Process with Python to Maintain Consistency",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "Jun 18, 2024",
    "isoDate": "2024-06-18T18:19:45.000Z",
    "description": "I’m excited to share how I recently automated my learning process by creating a video planner using Python! 📹📚 As someone who loves learning new skills, I often find myself wi...",
    "tags": [],
    "link": "https://kuldeep27396.medium.com/automating-my-learning-process-with-python-to-maintain-consistency-c81216596f53?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/200/1*SsE9xOMiHVVtPM7Z5KyNPg.png"
  },
  {
    "title": "Unveiling Insights from IPL Ticket Booking Data with Apache Spark",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "Apr 9, 2024",
    "isoDate": "2024-04-08T20:08:34.000Z",
    "description": "IPL Introduction : In the realm of sports, the Indian Premier League (IPL) stands out as one of the most electrifying events, capturing the attention of millions of cricket enth...",
    "tags": [
      "data",
      "spark",
      "spark-sql",
      "ipl",
      "cricket"
    ],
    "link": "https://kuldeep27396.medium.com/unveiling-insights-from-ipl-ticket-booking-data-with-apache-spark-8fcdfd912b70?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/1024/1*BDzCPHR8cW_pYN7-P7YlaA.jpeg"
  },
  {
    "title": "Battling Scams in Real Time with Max Mind Database",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "Sep 26, 2023",
    "isoDate": "2023-09-26T07:41:21.000Z",
    "description": "This blog covers more towards the usage of MMDB rather than the solution to the problem. I have explained the solution on high level, more&#x2026; Continue reading on Walmart Gl...",
    "tags": [
      "security",
      "fraud-detection",
      "data-engineering",
      "maxmind",
      "data"
    ],
    "link": "https://medium.com/walmartglobaltech/battling-scams-in-real-time-with-max-mind-database-d2b98781e43a?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/1500/1*WI9HsgUnvj4I6k5ETs2g1g.jpeg"
  },
  {
    "title": "A beginner’s guide to using Apache Hudi for data lake management.",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "Sep 1, 2023",
    "isoDate": "2023-09-01T17:10:43.000Z",
    "description": "Data lakes have become an essential part of data management in today’s organisations. They provide a centralised repository that can store structured and unstructured data at an...",
    "tags": [
      "data-science",
      "big-data",
      "apache-kafka",
      "hudi",
      "apache-spark"
    ],
    "link": "https://medium.com/walmartglobaltech/a-beginners-guide-to-using-apache-hudi-for-data-lake-management-6af50ade43ad?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/864/1*wa4TCa0sFQc67Xigmtlx7A.png"
  },
  {
    "title": "Coronavirus Changing my Perspective",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "Feb 20, 2022",
    "isoDate": "2022-02-20T09:08:26.000Z",
    "description": "“Khud ko bada banae main itne kyu ulaaj gae hum, ki, khudko marta dekh bhi kuch nhi kar paa rhe hai hum….” Corona has brought with it a wave of negative things, but it also gave...",
    "tags": [
      "coronavirus",
      "happy",
      "nature",
      "covid19",
      "peace"
    ],
    "link": "https://kuldeep27396.medium.com/coronavirus-changing-my-perspective-17c056e21534?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/1024/1*W_RSt7-S61XF5uX4esfrCg.jpeg"
  },
  {
    "title": "MLOps: Deploying Django Website",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "May 23, 2021",
    "isoDate": "2021-05-23T05:57:04.000Z",
    "description": "MLOps is the process of taking an experimental Machine Learning model into a production web system. The word is a compound of “Machine Learning” and the continuous development p...",
    "tags": [
      "django",
      "deployment",
      "python",
      "mlops",
      "devops"
    ],
    "link": "https://kuldeep27396.medium.com/mlops-deploying-django-website-b740a17cbe29?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/1024/1*ylIFbpPzVf72PDYP2Wjp2w.png"
  },
  {
    "title": "Business Statistics: Hypothesis Testing",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "May 21, 2021",
    "isoDate": "2021-05-21T08:15:57.000Z",
    "description": "Photo by Agence Olloweb on Unsplash Define The probability distribution of all the possible values a sample statistic can take is called the sampling distribution. of the statis...",
    "tags": [
      "data-visualization",
      "hypothesis",
      "data-science",
      "data",
      "statistics"
    ],
    "link": "https://kuldeep27396.medium.com/business-statistics-hypothesis-testing-ce559ce82819?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/1024/0*L3qHrPisPLYGegWb"
  },
  {
    "title": "Computer Vision: Detection and OCR",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "May 20, 2021",
    "isoDate": "2021-05-20T17:13:42.000Z",
    "description": "Document Layout Detection and OCR With Detectron2 ! This is a blog published by me on Analytics Vidhya. Have a look at it. It will be helpful if you want to work on Detection an...",
    "tags": [
      "computer-vision",
      "computer-science",
      "deeplearing",
      "google",
      "facebook"
    ],
    "link": "https://kuldeep27396.medium.com/computer-vision-detection-and-ocr-f4ae1d49689b?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/1024/0*RNu_quptS9DSJeTU.png"
  },
  {
    "title": "Uber Forecasting: Case Study",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "May 18, 2021",
    "isoDate": "2021-05-18T12:57:26.000Z",
    "description": "Merits of using deep learning and other machine learning approach in the area of forecasting at Uber The above is the link to the blog published on @AnalyticsVidhya. Please have...",
    "tags": [
      "analytics-vidhya",
      "machine-learning",
      "artificial-intelligence",
      "analytics",
      "uber"
    ],
    "link": "https://kuldeep27396.medium.com/uber-forecasting-case-study-f400c369eb13?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/1024/0*xe8LRNjF6nhzzAQY.jpg"
  },
  {
    "title": "Machine learning : Spotify Case Study",
    "source": "medium",
    "sourceLabel": "Medium",
    "date": "May 15, 2021",
    "isoDate": "2021-05-15T12:06:59.000Z",
    "description": "Machine learning: Spotify Case Study Spotify: Machine learning to personalize the user experience I tried to explain some of the parts of Spotify w.r.t. AIML. Hope you will find...",
    "tags": [
      "machine-learning",
      "blog",
      "case-study",
      "nlp"
    ],
    "link": "https://kuldeep27396.medium.com/machine-learning-spotify-case-study-dcfca9d7407d?source=rss-56f684b301b9------2",
    "image": "https://cdn-images-1.medium.com/max/1024/0*0Ed5pcZSNhJorH7y.jpg"
  }
];
