// All portfolio content in one place for easy updates

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string[];
  description: string;
  keyMetric: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
    doi?: string;
    note?: string;
  };
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  details: string;
  doi?: string;
  status: "published" | "under-review";
  contribution: string;
}

export interface Skill {
  category: string;
  icon: string;
  skills: string[];
}

export interface Award {
  title: string;
  subtitle: string;
  year: string;
  icon: string;
}

export interface Community {
  organization: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const stats = {
  yearsExperience: "4+",
  workloadReduction: "80%",
  publications: "2",
  gpa: "4.82",
};

export const experiences: Experience[] = [
  {
    company: "Optimus AI Labs",
    role: "AI/ML Engineer",
    location: "Lagos, NG",
    startDate: "Jan 2025",
    endDate: "Present",
    current: true,
    bullets: [
      "Deployed AI dental phone agent via Twilio → 80% front desk workload reduction",
      "Architected hybrid RAG system (PostgreSQL + Pinecone + MS MARCO reranking) → 70% accuracy boost, 60% latency reduction",
      "Full LLM lifecycle management: fine-tuning (PyTorch/TensorFlow) → deployment → token optimization (25% cost reduction)",
      "Built multi-agent workflows with LangGraph; benchmarked Claude, GPT, Gemini for optimal use-case alignment",
    ],
  },
  {
    company: "NextGen Research Lab",
    role: "Research Intern",
    location: "Fort Worth, TX (Remote)",
    startDate: "Jan 2025",
    endDate: "Present",
    current: true,
    bullets: [
      "AI/ML in cybersecurity research — literature reviews, methodology exploration",
      "LaTeX documentation for academic publications",
      "Research tooling: Elicit, Zotero, MyBib, Research Rabbit",
    ],
  },
  {
    company: "Syncline Tech Labs",
    role: "AI Engineer / Python Developer",
    location: "Michigan, USA (Remote)",
    startDate: "Aug 2023",
    endDate: "Nov 2024",
    current: false,
    bullets: [
      "Built custom AI apps integrating GPT-4, Claude, PaLM for document processing, code analysis, Q&A systems",
      "LangChain/LangGraph agent workflows for report generation and code refactoring",
      "FastAPI + PostgreSQL backends; CI/CD with GitHub Actions",
    ],
  },
  {
    company: "MLCollective Nigeria",
    role: "Independent Researcher",
    location: "Abeokuta, NG",
    startDate: "Oct 2023",
    endDate: "Present",
    current: true,
    bullets: [
      "Machine learning research collaboration with Nigerian community",
      "Organized paper reading sessions; contributed to research on CV, NLP, ML",
    ],
  },
  {
    company: "Hamoye AI Labs",
    role: "Data Scientist",
    location: "Lagos, NG",
    startDate: "May 2023",
    endDate: "Aug 2023",
    current: false,
    bullets: [
      "Customer churn prediction model: 87% accuracy, Streamlit deployment (Team Lead)",
      "Nigerian economic indicator prediction: GDP, remittance-to-GDP, unemployment forecasting",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "legal-rag",
    title: "Legal RAG System",
    category: ["AI & LLM"],
    description:
      "Production-grade RAG system enabling natural language queries over legal contracts with automatic source citation. Hybrid search with Pinecone + PostgreSQL.",
    keyMetric: "40% relevance improvement, 8s response for simple queries",
    techStack: [
      "Python",
      "FastAPI",
      "Pinecone",
      "PostgreSQL",
      "Google Gemini",
      "LangChain",
      "HuggingFace",
    ],
    links: {
      github: "https://github.com/Sikirulahi/legal-rag-system",
    },
  },
  {
    id: "dental-agent",
    title: "AI Dental Phone Agent",
    category: ["AI & LLM"],
    description:
      "Autonomous 24/7 phone agent handling patient appointments and inquiries using Twilio voice integration and multi-agent LangGraph workflows.",
    keyMetric: "80% reduction in front desk workload",
    techStack: [
      "Python",
      "LangGraph",
      "Twilio",
      "FastAPI",
      "Pinecone",
      "PostgreSQL",
    ],
    links: {
      note: "Private company project",
    },
  },
  {
    id: "estate-minder",
    title: "EstateMinder — Real Estate Assistant",
    category: ["Full Stack", "AI & LLM"],
    description:
      "AI-driven real estate recommendation system with semantic property search over 5,000+ Zillow listings scraped with Scrapy.",
    keyMetric: "Sub-second semantic search response times",
    techStack: [
      "Python",
      "Scrapy",
      "Flask",
      "Cohere AI",
      "Pinecone",
      "PostgreSQL",
      "HTML/CSS/JS",
    ],
    links: {
      github: "https://github.com/Sikirulahi/estate-minder",
    },
  },
  {
    id: "email-assistant",
    title: "Email Response Assistant",
    category: ["AI & LLM"],
    description:
      "Autonomous multi-agent email system with three specialized agents — classifier, responder, reviewer — with human-in-the-loop validation before sending.",
    keyMetric: "95%+ classification accuracy",
    techStack: ["Python", "LangGraph", "OpenAI", "Gemini"],
    links: {
      github: "https://github.com/Sikirulahi/email-response-assistant",
    },
  },
  {
    id: "chat-recipe",
    title: "ChatRecipe — AI Recipe Generator",
    category: ["AI & LLM", "Full Stack"],
    description:
      "Voice-enabled recipe assistant using LangChain tool-calling with intent detection, Spoonacular API integration, and speech-to-text via Hugging Face.",
    keyMetric: "Natural language to recipe in under 3 seconds",
    techStack: [
      "Python",
      "LangChain",
      "OpenAI",
      "Cohere",
      "Hugging Face",
      "Flask",
      "Docker",
    ],
    links: {
      github: "https://github.com/Sikirulahi/chat-recipe",
    },
  },
  {
    id: "uav-disease-detection",
    title: "UAV Maize Disease Detection",
    category: ["Computer Vision"],
    description:
      "End-to-end drone-mounted detection system trained on 10,382 images. YOLOv8 Nano deployed on Raspberry Pi for real-time field inference. Published research.",
    keyMetric: "88% accuracy, published in Tehnicki Glasnik (Web of Science indexed)",
    techStack: [
      "Python",
      "YOLOv8",
      "PyTorch",
      "Raspberry Pi",
      "Google Colab",
      "Roboflow",
    ],
    links: {
      doi: "https://doi.org/10.31803/tg-20240919073402",
      github: "https://github.com/Sikirulahi/uav-maize-disease-detection",
    },
  },
  {
    id: "asl-detection",
    title: "ASL Gesture Detection",
    category: ["Computer Vision"],
    description:
      "Real-time American Sign Language alphabet detection using MediaPipe hand landmarks with machine learning classification across diverse poses and lighting.",
    keyMetric: "Random Forest 98%, XGBoost 97%",
    techStack: [
      "Python",
      "MediaPipe",
      "OpenCV",
      "CVZone",
      "Scikit-learn",
    ],
    links: {
      github: "https://github.com/Sikirulahi/asl-gesture-detection",
    },
  },
  {
    id: "bert-lstm-sentiment",
    title: "BertLSTM Sentiment Analysis",
    category: ["NLP"],
    description:
      "Custom BertLSTM hybrid model for mobile phone review sentiment analysis across Samsung, iPhone, and Android, fine-tuned with PyTorch and deployed via Gradio.",
    keyMetric:
      "95.2% overall accuracy (96.1% Samsung, 94.5% iPhone, 93.8% Android)",
    techStack: [
      "Python",
      "PyTorch",
      "Transformers",
      "BERT",
      "LSTM",
      "Gradio",
      "HuggingFace",
    ],
    links: {
      github: "https://github.com/Sikirulahi/bert-lstm-sentiment",
    },
  },
];

export const publications: Publication[] = [
  {
    title:
      "Implementation of a Real-Time Maize Leaf Disease Detection System Using Raspberry Pi 5 and YOLOv8",
    authors:
      "S. Owoeye, F. Durodola, C. Evwidonor, S. Abdulkareem, E. Popoola, I. Akinode",
    journal: "Tehnicki Glasnik / Technical Journal",
    details:
      "Vol. 20, No. 3, September 2026 | Indexed in Web of Science (ESCI), Scopus, ERIH PLUS | JIF 2023 = 0.7 (Q3)",
    doi: "https://doi.org/10.31803/tg-20240919073402",
    status: "published",
    contribution:
      "Designed and trained YOLOv8 model, deployed on Raspberry Pi for edge inference, contributed to dataset collection and drone integration.",
  },
  {
    title:
      "Improving YOLOv8 for Crack Segmentation with Integrated Attention Modules",
    authors: "S. Owoeye, S. Abdulkareem, F. Olaniyi",
    journal: "Autonomous Intelligent Systems",
    details: "2025 | Under review",
    status: "under-review",
    contribution:
      "Implemented 5 attention mechanisms (CBAM, ECA, SKA, SA, GAM) in YOLOv8 architecture; curated 13,169-image dataset; achieved 0.820 mAP@0.5 with CBAM.",
  },
];

export const skills: Skill[] = [
  {
    category: "LLM & AI Tools",
    icon: "Brain",
    skills: [
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Claude",
      "Gemini",
      "Cohere",
      "Hugging Face",
      "Prompt Engineering",
      "RAG",
      "Multi-Agent Systems",
    ],
  },
  {
    category: "ML & Deep Learning",
    icon: "Network",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "YOLO",
      "OpenCV",
      "Neural Networks",
      "LSTM",
      "Transformers",
    ],
  },
  {
    category: "Backend & Infrastructure",
    icon: "Server",
    skills: [
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Git",
      "Railway",
      "Runpod",
      "Linux",
    ],
  },
  {
    category: "Data Science",
    icon: "BarChart3",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Streamlit",
      "Excel",
    ],
  },
  {
    category: "Research Tools",
    icon: "BookOpen",
    skills: [
      "LaTeX",
      "Zotero",
      "Elicit",
      "MyBib",
      "Research Rabbit",
      "Academic Writing",
    ],
  },
  {
    category: "Web Scraping",
    icon: "Globe",
    skills: [
      "Scrapy",
      "BeautifulSoup",
      "Selenium",
      "Requests",
      "AutoScraper",
    ],
  },
];

export const awards: Award[] = [
  {
    title: "Best Graduating Student",
    subtitle: "Mechatronics Engineering, FUNAAB",
    year: "2024",
    icon: "🏆",
  },
  {
    title: "First Class Honours",
    subtitle: "4.82/5.0 GPA",
    year: "2024",
    icon: "🎓",
  },
  {
    title: "Prof. L.O. Kehinde Award",
    subtitle: "Best in System Modelling & Simulation, 2023/2024",
    year: "2024",
    icon: "🏅",
  },
  {
    title: "Best Student in 400 Level",
    subtitle: "Academic Excellence Award",
    year: "2023",
    icon: "⭐",
  },
];

export const community: Community[] = [
  {
    organization: "Data Science Network — FUNAAB Chapter",
    role: "Active Member",
    location: "Abeokuta, NG",
    startDate: "Feb 2022",
    endDate: "Oct 2024",
    description:
      "Active member; collaborative projects, workshops, data analytics and ML discussions.",
  },
  {
    organization: "Google Developer Student Club (GDSC) — FUNAAB Chapter",
    role: "Member",
    location: "Abeokuta, NG",
    startDate: "Apr 2023",
    endDate: "Oct 2024",
    description:
      "Collaborative learning, real-world problem solving with technology.",
  },
  {
    organization: "MLCollective Nigeria",
    role: "Independent Researcher",
    location: "Abeokuta, NG",
    startDate: "Oct 2023",
    endDate: "Present",
    description:
      "Research community; paper reading sessions, CV, NLP, ML research collaboration.",
  },
];

export const education = {
  university: "Federal University of Agriculture, Abeokuta (FUNAAB)",
  degree: "B.Eng in Mechatronics Engineering",
  period: "October 2018 – September 2024",
  gpa: "4.82 / 5.0",
  coursework: [
    "Control Systems",
    "Robotics",
    "Signal Processing",
    "Computer Programming",
    "Engineering Mathematics",
  ],
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Sikirulahi",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abdulkareem-sikirulahi",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:kareemsikiru2018@gmail.com",
    icon: "Mail",
  },
];

export const researchInterests = [
  "Computer Vision",
  "NLP & LLMs",
  "Multi-Agent Systems",
  "AI in Robotics",
];
