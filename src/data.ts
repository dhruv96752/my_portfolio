import { Project, Skill, Experience, Certificate, Achievement, Stats } from "./types";

export const DEV_STATS: Stats = {
  gpa: "9.24 / 10",
  projectsCount: 12,
  certificationsCount: 8,
  commitsCount: 642,
};

export const PROJECTS: Project[] = [
  {
    id: "neuroinspect",
    title: "NeuroInspect: AI Brain Tumor Segmentation",
    category: "ai-ml",
    description: "Multi-class MRI scan segmentation and classification system using advanced PyTorch models with an interactive UI for clinical analysis.",
    details: [
      "Designed and trained a custom U-Net CNN in PyTorch for pixel-level glioma and meningioma brain tumor segmentation, achieving a 94.2% Dice Coefficient.",
      "Integrated a lightweight FastAPI backend for real-time model inference and JSON metadata delivery.",
      "Developed an interactive dashboard allowing medical professionals to upload scans, highlight segmentations, and contrast tissue densities."
    ],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    tags: ["PyTorch", "FastAPI", "React", "Medical-AI", "TailwindCSS"],
    githubUrl: "https://github.com/example/neuro-inspect",
    liveUrl: "https://neuro-inspect.example.com",
    stars: 38,
    featured: true
  },
  {
    id: "rag-academic",
    title: "CollegeMind: LLM Retrieval RAG Agent",
    category: "ai-ml",
    description: "An advanced academic companion using RAG to query complex university syllables, policies, and schedules with low latency.",
    details: [
      "Engineered Retrieval-Augmented Generation (RAG) system utilizing LangChain, ChromaDB vector store, and Gemini API.",
      "Processed over 1,500 pages of university policies and curricula; implemented smart token chunking with overlap to preserve structural context.",
      "Achieved sub-second response times by adding query re-ranking and semantic caching strategies."
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    tags: ["Gemini API", "ChromaDB", "LangChain", "Python", "Vite"],
    githubUrl: "https://github.com/example/collegemind-rag",
    liveUrl: "https://collegemind.example.com",
    stars: 52,
    featured: true
  },
  {
    id: "dsa-java-visualizer",
    title: "GraphCore: Java DSA Algorithmic Engine",
    category: "dsa-java",
    description: "A comprehensive structural visualizer for multi-path graph and tree algorithms, engineered strictly on clean Java OOP structures.",
    details: [
      "Constructed custom collections in Java (Red-Black Trees, AVL, Trie, and weighted Graphs) with step-by-step state serialisation.",
      "Serialized step objects to WebSockets, allowing the interactive frontend to pause, wind, and run traversals at variable speeds.",
      "Applied Dijkstra’s, Prim’s, and A* Pathfinding to simulated geographic maps to show concrete runtimes."
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    tags: ["Java SE", "React TS", "Algorithms", "DSA", "WebSockets"],
    githubUrl: "https://github.com/example/graphcore-visualizer",
    liveUrl: "https://graphcore.example.com",
    stars: 44,
    featured: true
  },
  {
    id: "mlops-pipeline",
    title: "AutoDeploy: Enterprise MLOps Pipeline",
    category: "ai-ml",
    description: "Automated training, evaluation, and CI/CD deployment flow for large-scale customer review sentiment forecasting.",
    details: [
      "Built reliable continuous training loops with MLflow tracking parameters, datasets, and loss metrics.",
      "Configured GitHub Actions CI/CD to build optimized Docker images, automatically auditing model performance drift on staging.",
      "Deployed auto-scaling FastAPI containers on Google Cloud Run utilizing Redis for rapid inference caching."
    ],
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800",
    tags: ["Docker", "MLflow", "GitHub Actions", "GCP", "FastAPI"],
    githubUrl: "https://github.com/example/autodeploy-mlops",
    stars: 27,
    featured: false
  },
  {
    id: "smart-portfolio-manager",
    title: "AlphaTrade: AI Portfolio Allocator",
    category: "web-dev",
    description: "A sleek stock tracker and automated investment balancer applying LSTM deep learning models to predict return boundaries.",
    details: [
      "Developed web scrapers in Python executing multithreaded financial data retrieval from Yahoo Finance.",
      "Trained an LSTM network (Keras) on 10 years of market data, adjusting variance using Modern Portfolio Theory (MPT).",
      "Created a pristine Apple-styled visual environment displaying live charts and rebalancing alerts."
    ],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Python", "Keras", "TailwindCSS", "Recharts"],
    githubUrl: "https://github.com/example/alphatrade-allocator",
    stars: 31,
    featured: false
  }
];

export const SKILLS: Skill[] = [
  {
    name: "Java (Core & Advanced)",
    level: 90,
    category: "Languages",
    icon: "Coffee",
    description: "Strong foundation in OOP, Multithreading, Streams API, Custom Collections, and Hibernate."
  },
  {
    name: "Python",
    level: 88,
    category: "Languages",
    icon: "Terminal",
    description: "Primary scientific language for AI/ML modeling, web-scraping, and automated pipeline scripting."
  },
  {
    name: "TypeScript / JS",
    level: 85,
    category: "Languages",
    icon: "Code2",
    description: "Used to build fast interactive user experiences, web portals, and serverless APIs."
  },
  {
    name: "Deep Learning & NLP",
    level: 82,
    category: "AI & ML",
    icon: "Brain",
    description: "Experience with CNNs, LSTMs, Transformers, HuggingFace, RAG pipelines, and Vector DBs."
  },
  {
    name: "TensorFlow & PyTorch",
    level: 80,
    category: "AI & ML",
    icon: "ScatterChart",
    description: "Familiar with model architecture, GPU acceleration, backpropagation details, and custom layers."
  },
  {
    name: "Data Structures & Algos",
    level: 92,
    category: "Core & Systems",
    icon: "Binary",
    description: "Advanced visual mapping, dynamic programming, greedily optimized graphs, and space complexity."
  },
  {
    name: "SQL & Databases",
    level: 85,
    category: "Core & Systems",
    icon: "Database",
    description: "Relational modeling in PostgreSQL & MySQL. Indexing optimization and high-fidelity queries."
  },
  {
    name: "Git & CI/CD Pipelines",
    level: 85,
    category: "Tools & Devops",
    icon: "GitBranch",
    description: "Version containment, automatic actions, multi-branch environments, and dockerized builds."
  },
  {
    name: "Docker & Cloud Services",
    level: 78,
    category: "Tools & Devops",
    icon: "Cloud",
    description: "Creating virtual environments, container orchestration, and deploying on GCP & AWS."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "MLOps & AI Engineer Intern",
    company: "NeuralNexus Solutions",
    location: "Bengaluru, India (Remote)",
    period: "Dec 2025 - May 2026",
    type: "Internship",
    details: [
      "Optimized standard inference configurations for stable diffusion models, reducing cold boots inside Kubernetes by 34%.",
      "Constructed automated FastAPI data filters preprocessing user feeds before model embedding operations.",
      "Collaborated on internal RAG software to answer technical support queues with 89% response acceptance."
    ],
    skillsApplied: ["PyTorch", "FastAPI", "Docker", "Kubernetes", "LangChain"]
  },
  {
    id: "exp-2",
    role: "AI Developer Intern",
    company: "Apex Healthcare AI",
    location: "New Delhi, India",
    period: "May 2025 - July 2025",
    type: "Internship",
    details: [
      "Assisted senior clinicians in refining CNN weights on thoracic digital X-ray anomalies, checking model accuracy against manual patient logs.",
      "Designed clean modular codebases handling medical DICOM file transfers over secure HTTP interfaces.",
      "Documented critical HIPAA-compliant model serving pipelines using Python logging."
    ],
    skillsApplied: ["Python", "TensorFlow", "DICOM", "RESTful APIs", "Flask"]
  },
  {
    id: "exp-3",
    role: "Google Developer Student Clubs Core Lead",
    company: "GDSC Campus Chapter",
    location: "University Campus",
    period: "Aug 2024 - Present",
    type: "Leadership",
    details: [
      "Instructed 300+ students on modern web application structure, git branch strategies, and neural network foundations.",
      "Orchestrated a 36-hour local hackathon with 45 teams; managed sponsorship relations and technical evaluations.",
      "Mentored junior members during coding bootcamps on Java OOP syntax and complex Graph paths."
    ],
    skillsApplied: ["Java", "Full Stack Development", "Public Speaking", "Event Management"]
  },
  {
    id: "exp-4",
    role: "Intel Student Ambassador (AI/ML Domain)",
    company: "Intel OneAPI Community",
    location: "National Outreach",
    period: "Sep 2024 - Apr 2025",
    type: "Ambassador",
    details: [
      "Conducted workshops displaying performance gains of Intel AI Analytics Toolkit and oneAPI libraries for deep models.",
      "Contributed sample PyTorch accelerators optimized and compiled for Intel CPUs to public collaborative hubs.",
      "Represented the university at national technology summits, receiving recognition for campus community efforts."
    ],
    skillsApplied: ["Intel oneAPI", "Intel Optimizations", "Deep Learning", "Technical Writing"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Oct 2025",
    credentialId: "DL-9082X14L",
    verificationUrl: "https://coursera.org/verify/specialization/example1",
    category: "AI/ML"
  },
  {
    id: "cert-2",
    title: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "Aug 2025",
    credentialId: "GCP-ACE-20412",
    verificationUrl: "https://credential.net/example2",
    category: "Cloud/DevOps"
  },
  {
    id: "cert-3",
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow Partner Network",
    date: "Jan 2025",
    credentialId: "TF-DEV-301140",
    verificationUrl: "https://tensorflow.org/certificate/verify/example3",
    category: "AI/ML"
  },
  {
    id: "cert-4",
    title: "Java SE 17 Certified Professional",
    issuer: "Oracle University",
    date: "Jul 2024",
    credentialId: "ORACLE-JV17-99",
    verificationUrl: "https://oracle.com/verify/credential/example4",
    category: "Development"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "Smart India Hackathon (SIH) National Finalist",
    event: "Ministry of Education, Govt. of India",
    rank: "National Finalist (Top 10%)",
    date: "Dec 2025",
    description: "Engineered a smart agricultural forecasting system recommending water dosage with soil sensor inputs combined with live weather predictions.",
    tags: ["IoT", "ML Regression", "Impact Solution"]
  },
  {
    id: "ach-2",
    title: "ACM-ICPC Regionals Qualifier",
    event: "Amrita ACM-ICPC Chapter",
    rank: "Rank 142 (Regional Round)",
    date: "Nov 2024",
    description: "Competed in high-intensity live programming, cracking multi-threaded dynamic allocation trees and speed complexity challenges.",
    tags: ["Algorithms", "CP", "Java OOP"]
  },
  {
    id: "ach-3",
    title: "1st Position - Intra-College AI Hackathon",
    event: "Department of Computer Science Engineering",
    rank: "Winner (1st / 80 teams)",
    date: "Oct 2024",
    description: "Designed a real-time speech translation portal utilizing audio streaming overlays and pipeline optimizations for minimal latency.",
    tags: ["Speech-to-Text", "Audio Processing", "Winner"]
  }
];
