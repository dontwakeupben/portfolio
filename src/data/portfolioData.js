const portfolioData = {
  personal: {
    name: "Ben Angelo",
    title: "AI Diploma Student & Machine Learning Enthusiast",
    email: "benn.angeloo1@gmail.clom", 
    githubUrl: "https://github.com/dontwakeupben",
    linkedinUrl: "https://linkedin.com/in/ben-angelo",
    resumeUrl: "https://drive.google.com/file/d/1oI8HmYdY70JI-5SfIED09ExtxxHdlBwZ/view?usp=sharing", // Link to your PDF resume
    bio: "I am a Diploma in AI student passionate about turning data into actionable insights. Currently focusing on Deep Learning, Natural Language Processing, and Computer Vision. I love solving complex problems and building intelligent systems.",
  },
  education: [
    {
      school: "Temasek Polytechnic",
      degree: "Diploma in Applied Artificial Intelligence",
      period: "2024 - Present",
      description: "Coursework includes: Data Structures, Machine Learning, Deep Learning, Statistics, Ethics in AI, and Python Programming, Web Development, App Development, Cloud Computing, and Data Visualization.",
      gpa: "GPA: 3.8/4.0 (Dean's List)" 
    },
    // Add secondary education if desired
  ],
  skills: [
    { category: "Languages", items: ["Python", "SQL", "JavaScript", "Dart", "Swift", "HTML", "CSS"] },
    { category: "AI & ML Frameworks", items: ["TensorFlow", "Scikit-learn", "Keras", "OpenCV","LangChain"] },
    { category: "Data Science", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"] },
    { category: "Tools & Platforms", items: ["Git/GitHub", "AWS",  "MySQL Workbench", "MongoDB"] },
  ],
  projects: [
    {
      title: "Pneumonia Detection System",
      category: "Computer Vision",
      description: "A Convolutional Neural Network (CNN) trained on chest X-ray images to detect early signs of pneumonia with 94% accuracy.",
      techStack: ["Python", "TensorFlow", "Keras", "Matplotlib"],
      githubLink: "#",
      demoLink: null // Set to null if no live demo
    },
    {
      title: "Sentiment Analysis Dashboard",
      category: "NLP",
      description: "A real-time dashboard analyzing Twitter/X data to determine public sentiment regarding specific tech trends using NLTK and Streamlit.",
      techStack: ["Python", "NLTK", "Streamlit", "Pandas"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Housing Price Predictor",
      category: "Regression / ML",
      description: "An end-to-end machine learning pipeline that predicts housing prices based on location and amenities using Random Forest Regressors.",
      techStack: ["Scikit-learn", "Pandas", "Flask API"],
      githubLink: "#",
      demoLink: null
    },
    {
      title: "AI Chatbot Assistant",
      category: "Generative AI",
      description: "A RAG (Retrieval-Augmented Generation) chatbot capable of answering questions based on uploaded PDF documents.",
      techStack: ["LangChain", "OpenAI API", "React", "Pinecone"],
      githubLink: "#",
      demoLink: "#"
    }
  ]
};

export default portfolioData;