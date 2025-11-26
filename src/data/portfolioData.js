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

    },
    // Add secondary education if desired
  ],
  skills: [
    { category: "Languages", items: ["Python", "SQL", "JavaScript", "Dart", "Swift", "HTML", "CSS"] },
    { category: "AI & ML Frameworks", items: ["TensorFlow", "Scikit-learn", "Keras", "OpenCV", "LangChain"] },
    { category: "Data Science", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"] },
    { category: "Tools & Platforms", items: ["Git/GitHub", "AWS", "MySQL Workbench", "MongoDB"] },
  ],
  projects: [
    {
      title: "Waste Classification using AWS Rekognition",
      category: "Computer Vision, Cloud Computing",
      description: "Using AWS Rekognition to classify different types of waste (plastic, paper, metal) from images to promote recycling efforts. Hosted on AWS Amplify.",
      techStack: ["Python", "HTML", "CSS", "AWS"],
      githubLink: "https://github.com/dontwakeupben/GreenWasteAI",
      demoLink: null // Set to null if no live demo
    },
    {
      title: "Loan Prediction System",
      category: "Classification, Data Science",
      description: "A machine learning model that predicts loan approval status based on applicant data using scikit-learn models and Streamlit for the web interface.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      githubLink: "https://github.com/dontwakeupben/loan-predictor",
      demoLink: null
    },
    {
      title: "Community Discord Bot",
      category: "Automation, Chatbot",
      description: "Fully-featured Discord bot for community convenience. Features include Valorant related commands, Chatbot functionality, and fun commands.",
      techStack: ["Python", "Discord.py", "MongoDB"],
      githubLink: "https://github.com/dontwakeupben/discord-bot",
      demoLink: null
    },
    {
      title: "Mental Health Quiz App",
      category: "Generative AI",
      description: "An app that allows users to take a quiz to asses how well they can deal with people with mental health issues. Answers are evaluated by an AI model to provide feedback and resources.",
      techStack: ["React", "Vite", "JavaScript", "Google AI Services"],
      githubLink: "https://github.com/dontwakeupben/mental-health-quiz",
      demoLink: "https://mental-health-quiz-vert.vercel.app/"
    }
  ]
};

export default portfolioData;