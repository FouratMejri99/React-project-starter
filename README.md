# 🚀 React SaaS Starter

![License](https://img.shields.io/badge/License-MIT-blue)
![Vite](https://img.shields.io/badge/Vite-3.0-blue)
![React](https://img.shields.io/badge/React-18.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

## A production ready To use **React.js + Vite + Tailwind CSS** starter kit designed to help you **finish projects faster** — beginner or advanced.

## Includes **Authentication, Protected Routes, Dashboard Layout, CRUD Example, and Dark Mode** out of the box.

---

## ✨ Features

- 🔐 **Authentication** (Login, Register, Logout) with Zustand store
- 🔒 **Protected Routes** using `react-router-dom`
- 📊 **Dashboard Layout** (Sidebar + Navbar + Logout + Welcome User)
- 📝 **CRUD Example** page with React Query
- 🌙 **Dark Mode Toggle** (persists in localStorage)
- ⚡ **React Query** for server state management
- 🎨 **Tailwind CSS** pre-configured with dark mode
- 🛠️ **Vite** for fast dev server + build

---

## 📂 Project Structure

```sh
src/
├── hooks/             # Custom React hooks (e.g., useDarkMode, useFetch)
│   └── useDarkMode.jsx
│
├── layouts/           # Layout components like Dashboard, with sidebar + navbar
│   └── DashboardLayout.jsx
│
├── pages/             # All page components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── crud/          # CRUD-specific pages
│       ├── CreateItem.jsx
│       ├── EditItem.jsx
│       └── ListItems.jsx
│
├── store/             # Zustand store for global state (e.g., auth)
│   └── authStore.js
│
├── utils/             # Utility functions / setup files
│   └── queryClient.js # React Query client setup
│
├── App.jsx            # Main routes + providers
├── main.jsx           # App entry point (ReactDOM.render / createRoot)
└── index.css          # Tailwind base styles

```

---

## 🚀 Getting Started

1️⃣ Clone the repo :

```
git clone https://github.com/YOUR_USERNAME/react-saas-starter.git
```

```
cd react-saas-starter
```

2️⃣ Install dependencies :

```
npm install
```

3️⃣ Run dev server :

```
npm run dev
```

4️⃣ Build for production :

```
npm run build
```

## 🔑 Authentication Flow

- Users can register with email & password

- Users can login and state is stored in Zustand

- On refresh, user session persists from localStorage

- Protected routes redirect unauthenticated users to /login

## 🌙 Dark Mode

- Toggle available in Navbar

- Theme persists using localStorage

- Uses Tailwind’s dark: variant

## 📦 Tech Stack

- React (with Vite)

- React Router

- React Query

- Tailwind CSS

- Zustand

## 📸 Screenshots

- Add screenshots here by replacing the placeholder links:

- Login / Register

- Dashboard

- Dark Mode

## 🤝 Contributing

- Contributions, issues, and feature requests are welcome!
- Feel free to fork this repo, make improvements, and submit PRs.

## 📜 License

- This project is licensed under the MIT License.

## 🌟 Extra Tips

- Replace https://api.example.com in api.js with your backend URL.

- Add more pages under DashboardLayout by creating nested routes.

- You can extend CRUD examples by copying CrudExample.jsx and changing endpoints.

- Customize Tailwind theme in tailwind.config.js for colors, fonts, etc.
