<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=for-the-badge" />
</p>

# 🚀 Dhananjay Raj — Portfolio Website

A modern, creative, **anti-gravity themed** portfolio website showcasing my journey as an aspiring Machine Learning Engineer. Built with React, Tailwind CSS, and Framer Motion — featuring glassmorphism UI, floating animations, a dark/light theme toggle, and a built-in chatbot.

### 🌐 [Live Demo →](https://portfolio-lyart-eight-k7s674qylp.vercel.app/)

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🎨 **Anti-Gravity UI** | Floating cards, subtle levitation animations, and smooth scroll effects |
| 🌓 **Dark / Light Mode** | Theme toggle with localStorage persistence — your preference is remembered |
| 💬 **Portfolio Chatbot** | Floating AI assistant that answers questions about skills, projects, education & more |
| 🔮 **Glassmorphism** | Frosted glass cards with backdrop blur and soft borders |
| ✍️ **Animated Name** | Typing effect with gradient wave animation |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop viewports |
| 📊 **Animated Counters** | DSA stats with scroll-triggered counting animations and progress bars |
| 📬 **Contact Form** | EmailJS integration for direct message delivery |
| 🎯 **Particle Background** | Subtle floating dots for ambient depth |

---

## 📸 Sections Overview

### 🏠 Hero
- Profile image displayed on the left with a floating drop-shadow effect (transparent PNG)
- Typing animation for the name with gradient wave styling
- CTA buttons: **View Projects** & **Contact Me**

### 👨‍💻 About
- Creative storytelling paragraph about my passion for ML, AI, and Full Stack Development

### 🧠 Skills & Tech Stack
- **Programming:** C++, C, Java, Python, JavaScript
- **AI/ML:** NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, Matplotlib, Power BI
- **Web:** HTML, CSS, ReactJS, NodeJS, Tailwind CSS
- **Tools:** MySQL, MongoDB, Git, GitHub
- **Soft Skills:** Problem Solving, Quick Learner, Adaptability
- Displayed as floating glassmorphism cards with hover animations

### 🚀 Projects
| Project | Tech Stack |
|---------|-----------|
| **ML-Driven Groundwater Prediction** | Python, XGBoost, Scikit-learn, Pandas, NumPy |
| **Brainstorm Connect** (Community Platform) | ReactJS, NodeJS, MongoDB, REST APIs |
| **Full Stack MERN Training Project** | ReactJS, NodeJS, ExpressJS, MongoDB |

### 📜 Certificates
- Master Generative AI & Tools (Aug 2025)
- Full Stack Development in React & Node (June 2025)
- Responsive Web Design (Nov 2023)

### 🏆 Achievements
- 15th Rank among 1000+ participants — Coding Ninjas Web Hackathon
- Multiple ML & Full Stack projects built and deployed
- Timeline layout with animated entries

### 📊 DSA Stats
- **LeetCode:** 100+ problems
- **GeeksforGeeks:** 40+ problems
- **HackerRank:** 50+ problems
- Animated counters + progress bars triggered on scroll

### 🎓 Education
| Degree | Institution | Score |
|--------|------------|-------|
| B.Tech in CSE | Lovely Professional University, Punjab | CGPA: 7.9 |
| Intermediate | Sumitra Modern School, Sitapur | 63% |
| Matriculation | Regency Public School, Sitapur | 83% |

### 📬 Contact
- Contact form powered by **EmailJS**
- Direct links to Email, Phone, GitHub, LinkedIn

### 🤖 Chatbot
- Floating button at bottom-right
- Type keywords like `skills`, `projects`, `education`, `contact`, `achievements`, `dsa`, `certificates` to get instant answers

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | Component-based UI |
| **Vite** | Fast dev server & build tool |
| **Tailwind CSS 3** | Utility-first styling with dark mode |
| **Framer Motion** | Smooth scroll & entrance animations |
| **react-icons** | 30+ technology & platform icons |
| **@emailjs/browser** | Client-side email sending |

---

## ⚡ Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/dhan345raj/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

---

## 🚀 Deployment (Vercel)

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Use these settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

4. Hit **Deploy** ✅

---

## ⚙️ Configuration

### Profile Image
Replace your photo at:
```
public/assets/profile/preview.png
```
Use a **transparent PNG** for the best floating effect.

### EmailJS (Contact Form)
Update these values in `src/components/Contact.jsx`:
```js
'YOUR_SERVICE_ID'   // Your EmailJS service ID
'YOUR_TEMPLATE_ID'  // Your EmailJS template ID
'YOUR_PUBLIC_KEY'    // Your EmailJS public key
```

### Certificate & Demo Links
Update placeholder `#` links in:
- `src/components/Certificates.jsx`
- `src/components/Projects.jsx`

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── assets/profile/       # Profile image (transparent PNG)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Responsive nav + theme toggle
│   │   ├── Hero.jsx           # Profile + animated name
│   │   ├── About.jsx          # Storytelling section
│   │   ├── Skills.jsx         # Tech stack cards
│   │   ├── Projects.jsx       # Project showcase
│   │   ├── Certificates.jsx   # Certificate cards
│   │   ├── Achievements.jsx   # Timeline layout
│   │   ├── DSAStats.jsx       # Animated counters
│   │   ├── Education.jsx      # Education timeline
│   │   ├── Contact.jsx        # Contact form (EmailJS)
│   │   ├── Chatbot.jsx        # Floating chatbot
│   │   ├── Footer.jsx         # Social links
│   │   └── ParticleBackground.jsx
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/light mode state
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # Global styles + animations
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>Dhananjay Raj</strong>
</p>
