# Talya Toledano - Portfolio

אתר פורטפוליו אישי מודרני ומרשים.

## 🚀 התקנה והרצה

```bash
# התקנת dependencies
npm install

# הרצה מקומית
npm run dev

# בנייה לפרודקשן
npm run build
```

## 📁 מבנה הפרויקט

```
src/
├── data/
│   └── resume.js          ← כל המידע שלך (ערכי כאן!)
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── assets/                ← תמונות מסך של פרויקטים
├── App.jsx
├── main.jsx
└── index.css
```

## ➕ הוספת פרויקט חדש

ערכי את הקובץ `src/data/resume.js` והוסיפי אובייקט חדש למערך `projects`:

```js
{
  id: 2,
  title: "שם הפרויקט",
  description: "תיאור קצר",
  techStack: {
    server: ["Node.js", "Express"],
    client: ["React", "CSS"]
  },
  highlights: ["פיצ'ר 1", "פיצ'ר 2"],
  images: ["/screenshots/project2-1.png"],
  liveUrl: "https://...",        // או null אם לא רץ
  githubUrl: "https://github.com/..."
}
```

## 🖼️ הוספת תמונות מסך

1. שמרי תמונות בתיקיית `public/screenshots/`
2. הוסיפי את הנתיב למערך `images` של הפרויקט:
   ```js
   images: ["/screenshots/my-project-1.png", "/screenshots/my-project-2.png"]
   ```

## 🌐 העלאה ל-Vercel (חינם)

1. העלי את הפרויקט ל-GitHub
2. היכנסי ל-[vercel.com](https://vercel.com)
3. התחברי עם GitHub
4. לחצי "Import Project" ובחרי את הריפו
5. Vercel יזהה אוטומטית שזה Vite + React
6. לחצי Deploy - זהו! 🎉

הדומיין שלך יהיה: `talya-portfolio.vercel.app`
