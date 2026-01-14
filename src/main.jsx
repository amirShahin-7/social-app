import { createRoot } from "react-dom/client";
import "@fontsource-variable/cairo";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";
import { Bounce, ToastContainer } from "react-toastify";
import AuthContextProvider from "./Context/AuthContext";
import ThemeProvider from "./Context/ThemeContext";
import { createHead, UnheadProvider } from "@unhead/react/client";

const head = createHead({});

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <HeroUIProvider>
      <AuthContextProvider>
        <UnheadProvider head={head}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
          <App />
        </UnheadProvider>
      </AuthContextProvider>
    </HeroUIProvider>
  </ThemeProvider>
);
