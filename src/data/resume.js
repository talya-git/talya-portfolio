export const personalInfo = {
  name: "Talya Toledano",
  title: "Software Engineer | Full Stack Developer",
  email: "talyatoledano10@gmail.com",
  phone: "0556703107",
  summary: "Results-driven Full Stack Developer with strong analytical thinking and a proven ability to rapidly acquire new technologies. Experienced in building end-to-end web systems while leveraging AI tools to streamline workflows and enhance performance. A collaborative team player who thrives in dynamic, high-pressure environments, delivering clean, maintainable code that meets the highest professional standards.",
  languages: ["Hebrew — Native", "English — Highly proficient (technical & conversational)"]
};

export const experience = [
  {
    company: "Ministry of Education",
    role: "Software Developer",
    period: "Sep 2025 — Jan 2026",
    project: "IRG — Organizational Unit Management System",
    highlights: [
      "Architected and developed a full-stack hierarchical system using .NET 8 and Angular 19 with layered architecture and Standalone components",
      "Implemented advanced server-side patterns including Generic Repository, EF Core 8, and recursive relationship management in SQL Server",
      "Engineered authentication & security layer: BFF gateway, OIDC authentication via ADFS, Refresh Token management, and CSRF protection",
      "Optimized performance through Redis Caching (Cache-Aside pattern) and reactive state management using Signals and NgRx",
      "Developed dynamic UI components with PrimeNG featuring complex data tables, tree views, and role-based access control (RBAC)"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Oz Ceramics — E-Commerce Store",
    description: "A dynamic, feature-rich online ceramics shopping platform with real-time inventory management and seamless user experience",
    techStack: {
      server: ["Node.js", "C#", "Web API", "SQL Server", "MongoDB"],
      client: ["React 19", "JavaScript", "HTML5", "CSS3"]
    },
    highlights: [
      "Built a responsive product catalog with advanced filtering and real-time cart updates",
      "Designed RESTful APIs for inventory, order, and user management",
      "Implemented role-based Admin Panel with full CRUD operations",
      "Optimized for fast load times and high performance across all devices"
    ],
    images: [
      "/screenshots/shopping-1.webp",
      "/screenshots/shopping-2.webp",
      "/screenshots/shopping-3.webp",
      "/screenshots/shopping-4.webp",
      "/screenshots/shopping-5.webp",
      "/screenshots/shopping-6.webp",
      "/screenshots/shopping-7.webp"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/talya-git/project-react-node"
  },
  {
    id: 2,
    title: "Luxury Action — Chinese Auction",
    description: "Enterprise-grade full-stack Chinese auction management system with hierarchical organizational structures — developed for the Ministry of Education",
    techStack: {
      server: [".NET 8", "EF Core", "SQL Server", "Redis"],
      client: ["Angular 19", "PrimeNG", "NgRx", "TypeScript"]
    },
    highlights: [
      "Layered architecture with Generic Repository pattern",
      "OIDC authentication via ADFS with BFF security layer",
      "Redis Caching using Cache-Aside pattern for optimal performance",
      "Dynamic tree views and complex data tables with RBAC permissions"
    ],
    images: [
      "/screenshots/angular-1.webp",
      "/screenshots/angular-2.webp",
      "/screenshots/angular-3.webp",
      "/screenshots/angular-4.webp",
      "/screenshots/angular-5.webp",
      "/screenshots/angular-6.webp",
      "/screenshots/angular-7.webp",
      "/screenshots/angular-8.webp",
      "/screenshots/angular-9.webp",
      "/screenshots/angular-10.webp"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/talya-git/project-angular-netCore"
  },
  {
    id: 3,
    title: "Docker & Redis Integration",
    description: "Containerized caching solution demonstrating Docker orchestration with Redis for high-performance data management",
    techStack: {
      server: ["Docker", "Redis"],
      client: []
    },
    highlights: [
      "Configured Docker environment with Redis containers",
      "Implemented caching strategies for performance optimization"
    ],
    images: [],
    liveUrl: null,
    githubUrl: "https://github.com/talya-git/Docker-Redis"
  },
  {
    id: 4,
    title: "Algorithms & Data Structures",
    description: "Comprehensive collection of algorithm implementations and data structure exercises showcasing problem-solving proficiency",
    techStack: {
      server: ["C", "Java"],
      client: []
    },
    highlights: [
      "Graph algorithms and traversal techniques",
      "Advanced data structure implementations",
      "Complex logical problem-solving solutions"
    ],
    images: [],
    liveUrl: null,
    githubUrl: "https://github.com/talya-git/exe-10"
  },
  {
    id: 5,
    title: "AI Tic Tac Toe",
    description: "An unbeatable Tic Tac Toe game powered by the Minimax Algorithm with Alpha-Beta Pruning — play against an AI that never loses",
    techStack: {
      server: ["Python", "Flask"],
      client: ["JavaScript", "HTML5", "CSS3"]
    },
    highlights: [
      "Minimax algorithm with Alpha-Beta Pruning optimization",
      "RESTful API for real-time game state management",
      "Unbeatable AI opponent with optimal decision-making",
      "Score tracking and responsive modern UI"
    ],
    images: [],
    liveUrl: "https://ai-tictactoe-qrbl.onrender.com",
    githubUrl: "https://github.com/talya-git/ai-tictactoe"
  }
];

export const education = [
  {
    period: "2024 — 2026",
    items: [
      "Software Engineering Diploma — Seminar HaChadash, Jerusalem (accredited by MoE)",
      "Teaching Certification — pursuing \"Senior Teacher\" qualification",
      "Ultra Code Program — Advanced coursework: Data Structures, Algorithms, Graph Algorithms, Operating Systems",
      "Certificate of Excellence in English — Kivun College"
    ]
  },
  {
    period: "2020 — 2024",
    items: [
      "Seminar HaChadash High School, Jerusalem",
      "Matriculation exams with honors (Sald Institute accredited)",
      "Mathematics — 5 units (highest level)"
    ]
  }
];

export const skills = {
  languages: ["Java", "C", "C#", "Python"],
  web: ["Angular 19", "React 19", "Node.js", "Spring Boot", "TypeScript", "JavaScript", ".NET Core", "Web API", "Django", "HTML5", "CSS3"],
  databases: ["SQL Server", "MongoDB", "Redis", "Hadoop", "BI"],
  os: ["Linux/Unix", "Windows"],
  tools: ["Git", "VS Code", "Visual Studio", "Postman", "Eclipse", "PyCharm", "AWS", "Azure"],
  concepts: ["OOP", "Design Patterns", "Microservices", "AI Development Tools"],
  courses: ["Algorithms", "Data Structures", "Graph Theory", "Computer Networks", "Operating Systems", "Digital Systems", "Software Security", "Systems Analysis", "UX Design", "Technical English"]
};
