# Socialify

Socialify is a modern, feature-rich social media application built with React and Vite. It offers a seamless and engaging user experience with a sleek, glassmorphic design, focusing on performance and responsiveness.

## 🔗 Live Demo
Check out the live application here: **[Socialify Live Demo](https://social-app-kappa-lemon.vercel.app/)**

## 📂 Repository
**[GitHub Repository](https://github.com/amirShahin-7/social-app)**

---

## ✨ Features

### 🔐 Authentication
- **Secure Login & Registration**: Robust authentication forms with form validation using Zod and React Hook Form.
- **Glassmorphic UI**: Beautiful, modern authentication screens with support for both Light and Dark modes.

### 🏠 Home & Feed
- **Dynamic Feed**: Real-time social feed to browse posts from users.
- **Interactive Posts**: View detailed post content.

### 👤 User Profile
- **Profile Management**: Dedicated profile pages to view user information and posts.
- **Settings**: Customizable user settings including profile updates and security options.

### 🎨 UI/UX Design
- **Modern Aesthetics**: Built with a "White-Glassy" and Dark aesthetics, utilizing vibrant gradients and blur effects.
- **Responsive Design**: Fully responsive layout optimized for desktops, tablets, and mobile devices using Tailwind CSS v4.
- **Dark/Light Mode**: Full support for theme switching to suit user preference.
- **Animations**: Smooth transitions and micro-interactions powered by Framer Motion.
- **Notifications**: Instant user feedback via Toast notifications.

---

## 🛠️ Tech Stack

This project is built using the latest web technologies to ensure speed, scalability, and maintainability.

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Component Library**: [HeroUI](https://www.heroui.com/)
- **State Management & Data Fetching**:
    - [React Query (@tanstack/react-query)](https://tanstack.com/query/latest)
    - Context API
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Typography**: [Cairo Font](https://fontsource.org/fonts/cairo)

---

## 📂 Project Structure

A quick look at the top-level directory structure:

```
src/
├── assets/          # Static assets (images, global styles)
├── Components/      # Reusable UI components (Feed, Auth, Layout, etc.)
├── Context/         # React Context providers (User, Theme, etc.)
├── hooks/           # Custom React hooks
├── Pages/           # Application pages (Routes)
│   ├── Auth/        # Login and Register pages
│   ├── Home/        # Main Feed page
│   ├── NotFound/    # 404 Error page
│   ├── PostDetails/ # Single Post view
│   └── Profile/     # User Profile and Settings pages
├── Services/        # API service calls and configuration
├── App.jsx          # Main application component
└── main.jsx         # Entry point
```

---


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/amirShahin-7/social-app/issues).

---

