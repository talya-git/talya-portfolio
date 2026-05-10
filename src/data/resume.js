export const personalInfo = {
  name: "טליה טולידאנו",
  title: "הנדסאית תוכנה | Full Stack Developer",
  email: "talyatoledano10@gmail.com",
  phone: "0556703107",
  summary: "מפתחת Full Stack בעלת חשיבה אנליטית ויכולת למידה עצמאית ומהירה. מנוסה בפיתוח מערכות Web מקצה לקצה תוך הטמעת כלי AI לייעול תהליכי עבודה ושיפור ביצועים. שחקנית צוות בעלת יחסי אנוש מעולים, המצטיינת בפתרון בעיות מורכבות בסביבה דינמית ותחת לחץ.",
  languages: ["עברית - שפת אם", "אנגלית טכנית ומדוברת - ברמה טובה מאד"]
};

export const experience = [
  {
    company: "משרד החינוך",
    role: "מפתחת תוכנה",
    period: "ספטמבר 2025 - ינואר 2026",
    project: "פרויקט IRG (מערכת ניהול יחידות ארגוניות)",
    highlights: [
      "פיתוח Full-Stack של מערכת היררכית מורכבת ב-.NET 8 ו-Angular 19 בארכיטקטורת שכבות ורכיבי Standalone",
      "צד שרת מתקדם: מימוש Generic Repository, עבודה עם EF Core 8 וניהול קשרים רקורסיביים ב-SQL Server",
      "אבטחה ואימות: הקמת שכבת BFF, מימוש אימות מול ADFS (OIDC), ניהול Refresh Token והגנת CSRF",
      "ביצועים ו-State: הטמעת Redis Caching (דפוס Cache-Aside) וניהול מצב ריאקטיבי באמצעות Signals ו-NgRx",
      "ממשק משתמש: פיתוח UI דינמי ב-PrimeNG הכולל טבלאות מורכבות, תצוגות עץ וניהול הרשאות (RBAC)"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "ממשק קניות אונליין",
    description: "פיתוח ממשק משתמש דינמי ומתקדם לביצוע קניות אונליין",
    techStack: {
      server: ["Node.js", "C#", "Web API", "SQL Server", "MongoDB"],
      client: ["React 19", "JavaScript", "HTML5", "CSS3"]
    },
    highlights: [
      "קטלוג מוצרים, סינון וניהול סל קניות עם עדכון בזמן אמת",
      "בניית API לניהול מלאי, הזמנות ומשתמשים",
      "הטמעת מערכת הרשאות (Admin Panel) לפעולות CRUD",
      "עיצוב רספונסיבי ומודרני, מותאם לטעינה מהירה וביצועים גבוהים"
    ],
    images: [],
    liveUrl: null,
    githubUrl: null
  }
];

export const education = [
  {
    period: "2024-2026",
    items: [
      "הנדסאות תוכנה / סמינר החדש, ירושלים - לימודים לתואר הנדסאי תוכנה בהסמכת מה\"ט",
      "לימודי הוראה לקראת תואר \"מורה בכיר\"",
      "קורס Ultra Code - תכנית הרחבה: Data Structure, Algorithms, Algorithms on Graphs, Operating Systems",
      "תעודת הצטיינות באנגלית מטעם מכללת \"כוון\""
    ]
  },
  {
    period: "2020-2024",
    items: [
      "ביה\"ס על יסודי סמינר החדש ירושלים",
      "בחינות מטעם מכון סאלד תואמי בגרות בהצטיינות",
      "מתמטיקה ברמת 5 יחידות לימוד"
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
  courses: ["אלגוריתמים", "מבני נתונים", "גרפים", "תקשורת מחשבים ורשתות", "מערכות הפעלה", "מערכות ספרתיות", "אבטחת תוכנה", "ניתוח מערכות", "חווית משתמש", "אנגלית טכנית"]
};
