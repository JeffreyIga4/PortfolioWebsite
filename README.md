
# Personal Portfolio Website

A modern, responsive personal portfolio built with **React** and **Vite**, designed to showcase projects, skills, and experience with a strong focus on clean UI and smooth animations.

The site supports **dark/light mode**, is fully responsive across devices, and is deployed publicly for easy access by recruiters and employers.

## 🔗 Live Demo
👉 https://jeffreyiga.netlify.app


![DCA4910C-5B33-4344-80BF-70849BC1ABC7_1_201_a](https://github.com/user-attachments/assets/358ebfe7-0c3e-4e56-abba-f35d247e0716)

---

## ✨ Features

- **Modern React (Vite)** for fast development and optimized builds
- **Dark / Light theme toggle** (defaults to dark mode)
- **Responsive design** (mobile, tablet, desktop)
- **Animated star background** for visual depth
- **Smooth section navigation**
- **Projects showcase**
- **Skills filtering**
- **Contact section**
- **Production deployment via Netlify**

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Custom CSS / React components
- **Deployment:** Netlify

---

## 📁 Project Structure

```
src/
├── components/
│ ├── HeroSection.jsx
│ ├── AboutSection.jsx
│ ├── SkillsSection.jsx
│ ├── ProjectsSection.jsx
│ ├── ContactSection.jsx
│ ├── ThemeToggle.jsx
│ └── StarBackground.jsx
├── hooks/
│ └── useTheme.js
├── pages/
│ └── Home.jsx
├── styles/
│ └── index.css
├── App.jsx
└── main.jsx
```

---

## 🌗 Theme Handling

- The application **starts in dark mode by default**
- Theme state is fully managed in React
- Theme preference persists across refreshes
- UI icons stay perfectly in sync with the active theme

---


## 🚀 Running Locally

```bash
npm install
npm run dev
```

---



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

