# 📘 Neat Spot Frontend

Frontend for the **Neat Spot** cleaning service management system. Built using **React**, **Vite**, **Tailwind CSS**, and **TanStack React Query**, it supports booking features, authentication, protected routing, and admin functionalities.

---

## 🔗 Live Demo Links
- 🌐 Frontend (Netlify):  https://neat-spot.netlify.app
- 🔗 Backend API (Vercel):  https://neat-spot-api.vercel.app


## 🚀 Tech Stack

* **React 19** – UI framework
* **Vite** – Fast dev server and build tool
* **Tailwind CSS 4** – Utility-first styling
* **React Router v7** – Routing system
* **TanStack React Query v5** – Server-state management
* **React Hook Form** – Form handling
* **Yup** – Schema validation
* **React Hot Toast** – Toast notifications
* **Axios** – HTTP requests
* **Date-fns** – Date utility library
* **Compound Components** – For Modal, Menus, and Table UI components

---

## 📁 Project Structure

```bash
/src
├── features
│   ├── authentication         # Login, Signup, useUser, useLogin
│   ├── dashboard              # Customer features (booking table, hooks)
    ├── create-booking         # Customer features (create new booking )
│   └── admin
│       └── dashboard          # Admin features (admin bookings, services)
├── hooks                      # Custom hooks (commonly use - e.g., useOutsideClick)
├── pages                      # Pages like Login, Signup, Dashboard, AdminDashboard
├── services                   # Axios API functions
├── ui                         # Reusable UI components (Modal, Table, Button, etc.)
├── utils                      # helper functions (validationSchema)
└── App.jsx                    # Main entry with routing
```

---

## 🔐 Auth & Protected Routes

* **JWT-based authentication** (stored in cookies)
* **Role-based routing**: Only admins can access `/admin/*` routes
* `ProtectedRoute` component protects main app layout

---

## ✨ Reusability & Patterns

* Compound component pattern: `Modal`, `Menus`, and `Table`
* Reusable hooks: `useLogin`, `useUser`, `useBookings`, `useCreateService`, etc.
* Clean separation of customer vs admin features
* `react-query` used for caching and refetching data across the app

---

## 🛠️ Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview built app
npm run lint      # Run eslint
```

---

## 🔐 Demo Admin Credentials (For Testing Only)

* **Username**: `admin`
* **Password**: `11111111`
---

## 📦 Install & Setup

1. Clone the repo
2. Install dependencies

```bash
npm install
```

3. Start the dev server

```bash
npm run dev
```

---

## 📌 Notes

* This project is connected to a real backend built with Node.js, Express, and MongoDB.
* Remember to run the backend before using the frontend.
* Make sure CORS and credentials (`withCredentials: true`) are properly configured.

---

## 🙌 Author

Built with ❤️ by [Hiruna Thulhid](https://github.com/thulhid).
