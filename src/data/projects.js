import carevault from "../assets/carevault.png"
import wallet from "../assets/walletwizard.png"
import stockdash from "../assets/stockdashboard.png"
import zomato from "../assets/zomato.png"
import textnova from "../assets/textnova.png"
import chatalogue from "../assets/chatalogue.png"
import stockmomentum from "../assets/stockmomentum.png"
import exoplanet from "../assets/exoplanet.png"
import netflix from "../assets/netflix.png"
import adidas from "../assets/adidas.png"
import brfss from "../assets/brfss.png"
const projects = [
  {
    title: "CareVault – Full-Stack Healthcare Management Platform",
    description:
      "Built a full-stack caregiver management system with secure authentication, patient tracking, appointment scheduling, medical document storage, and role-based access control using Next.js, React, TypeScript, and Supabase.",
    image: carevault,
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    demo: "https://caregiver-app-project.vercel.app/login",
    github: "https://github.com/poojasukhdeve-project/carevault",
    slides:"https://docs.google.com/presentation/d/1PDBpm4n-tayLSQcCOxdbHIa5fGXYE5A1/edit?usp=sharing&ouid=106773701914232690684&rtpof=true&sd=true"

  },

  {
    title: "Wallet Wizard – Expense Tracking & Analytics System",
    description:
      "Developed a full-stack personal finance management application with secure authentication, real-time expense tracking, category-based transaction management, analytics dashboards, and PostgreSQL-backed data architecture using Next.js and Supabase.",
    image: wallet,
    tech: [ "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    demo: "https://wallet-wizard-ten.vercel.app/login",
    github: "https://github.com/poojasukhdeve-project/Wallet-Wizard",
    slides:"https://docs.google.com/presentation/d/1SXsRt1TiRJViySR42xzmJ4hW_59astHi/edit?usp=sharing&ouid=111251933167376446338&rtpof=true&sd=true"
  },

  {
    title: "Stock Portfolio Manager – Investment Analytics Dashboard",
    description:
      "Engineered a scalable MERN-stack financial management system featuring JWT-based authentication, modular REST APIs, MongoDB schema design, dynamic portfolio tracking, and secure frontend-backend integration.",
    image: stockdash,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Axios", "React Router"],
    demo: "https://youtu.be/WiU-whS36ms",
    github: "https://github.com/poojasukhdeve-project/stock-portfolio-manager",
    slides:"https://drive.google.com/file/d/1XvFvDHloH4gzLXV1z9WEXy-ZhCyi2CuB/view?usp=sharing"
  },

    {
    title: "Stock Momentum Analyzer – Financial Analytics & Market Intelligence Dashboard",
    description:
      "Developed a scalable financial analytics dashboard enabling stock momentum tracking, comparative market analysis, RSI/SMA/EMA computation, and dynamic visualization of historical trading data through modern full-stack technologies.",
    image: stockmomentum,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Recharts", "Axios", "CSS"],
    demo: "#",
    github: "https://github.com/poojasukhdeve-project/stock_momentum_analyzer",
  },

    {
    title: "AI-Powered Restaurant Analytics Dashboard",
    description:
      "Developed an AI-powered full-stack restaurant analytics dashboard using Flask, JavaScript, Chart.js, and Hugging Face LLM API to analyze Zomato India dataset trends, customer preferences, cuisine insights, ratings, budgets, and intelligent restaurant recommendations through interactive visualizations and conversational AI assistance.",
    image: zomato,
    tech: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Chart.js", "Hugging Face Inference API", "NLP", "REST API", "Data Visualization", "Business Intelligence", "AI Assistant", "Machine Learning"],
    demo: "https://ai-restaurant-analytics-dashboard.onrender.com/",
    github: "https://github.com/poojasukhdeve-project/ai-restaurant-analytics-dashboard",
  },
    {
    title: "TextNova AI Generator",
    description:
      "Developed a GPT-style AI text generation platform using nanoGPT, Flask, and Transformer-based NLP architecture with temperature-controlled text generation, Top-k/Top-p sampling, prompt-based prediction, and interactive full-stack web integration for generating human-like AI responses.",
    image: textnova,
    tech: ["Python", "PyTorch", "Flask", "nanoGPT", "NLP", "Transformer Architecture", "HTML5", "CSS3", "JavaScript", "Machine Learning", "Text Generation", "Top-k Sampling", "Top-p Sampling", "Temperature Sampling"],
    demo: "https://youtu.be/sKb2l6baH-8",
    github: "https://github.com/poojasukhdeve-project/TextNova-AI-Generator",
    slides:"https://docs.google.com/presentation/d/15RdRM0zOy5aud3lV21xDsrAaHgj7Kt4L/edit?usp=sharing&ouid=111251933167376446338&rtpof=true&sd=true"
  },

  
  {
    title: " Chatalogue — University Course Assistant Chatbot",
    description:
      "Engineered a local-first AI-powered university course assistant chatbot integrating custom NLP pipelines, spaCy NER, Sentence Transformers, SQLite, deterministic SQL generation, and GPT-4.1-mini to deliver context-aware conversational responses for course schedules, instructor lookup, classroom locations, and multi-query academic assistance.",
    image: chatalogue,
    tech: ["Python", "NLP", "spaCy", "SentenceTransformers", "SQLite", "GPT-4.1-mini", "OpenAI API", "Machine Learning", "Logistic Regression", "RAG", "Tkinter", "SQL", "Semantic Parsing", "Named Entity Recognition (NER)", "Conversational AI"],
    github: "https://github.com/poojasukhdeve-project/CHATALOGUE-main",
  },

  
  {
    title: "Exoplanet Detection & Explainable AI Analysis using SHAP",
    description:
      "Developed a machine learning and explainable AI analytics project for exoplanet detection using statistical analysis, Random Forest, Decision Trees, Gradient Boosting, and SHAP interpretability techniques to identify significant planetary features, visualize model behavior, and improve prediction transparency through advanced data analysis and visualization.",
    image: exoplanet,
    tech: ["Python", "Scikit-learn", "SHAP", "Machine Learning", "Random Forest", "Explainable AI (XAI)", "Pandas", "Data Visualization"],
    github: "https://github.com/poojasukhdeve-project/Exoplanet-Data-Visualization-and-Analysis-with-SHAP",
  },

  
  {
    title: "BRFSS Healthcare Predictive Analytics & Disease Risk Modeling",
    description:
      "Developed a healthcare predictive analytics system using statistical modeling, machine learning, and explainable AI techniques to analyze BRFSS health data, identify disease risk factors, and improve prediction accuracy through feature engineering, hyperparameter tuning, cross-validation, and evaluation of 36 classification models including Random Forest, KNN, XGBoost, and Logistic Regression.",
    image: brfss,
    tech: ["R", "Machine Learning", "Random Forest", "XGBoost", "SHAP", "Predictive Analytics", "Statistical Analysis", "ggplot2", "caret", "Feature Engineering"],
    github: "https://github.com/poojasukhdeve-project/BRFSS-Data-Analytics-Exploring-Health-Patterns-and-Risk-Factors-with-R",
  },

  {
    title: "Netflix Content Analytics & Visualization Dashboard using Tableau",
    description:
      "Developed an interactive Tableau-based business intelligence dashboard to analyze Netflix’s global content library, visualizing trends across genres, ratings, countries, content types, and release timelines through choropleth maps, bar charts, bubble charts, and area visualizations for data-driven entertainment analytics and content insights.",
    image: netflix,
    tech: ["Tableau", "Data Visualization", "Business Intelligence (BI)", "Dashboard Development", "Data Analytics", "Interactive Charts", "Data Storytelling"],
    github: "https://github.com/poojasukhdeve-project/Netflix-Data-Visualization-Dashboard-using-Tableau",
  },

  {
    title: "Adidas Interactive Sales Analytics Dashboard",
    description:
      "Developed an interactive Excel-based sales analytics dashboard for Adidas to analyze regional sales performance, retailer contributions, sales methods, and time-series trends using pivot tables, dynamic filtering, VBA automation, KPI tracking, and advanced data visualization techniques for business intelligence and data-driven decision-making.",
    image: adidas,
    tech: ["Microsoft Excel", "VBA", "Pivot Tables", "Data Visualization", "Business Intelligence (BI)", "KPI Analytics", "Dashboard Development", "Data Analysis"],
    github: "https://github.com/poojasukhdeve-project/Advance-Excel-Adidas-Sales-Dashboard",
  },
];

export default projects;