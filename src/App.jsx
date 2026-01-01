import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AuthLayout from "./Components/Layouts/AuthLayout";
import MainLayout from "./Components/Layouts/MainLayout";
import { Bounce, ToastContainer } from "react-toastify";
import MainProtectedRoute from "./Components/MainProtectedRoute";
import AuthProtectedRoute from "./Components/Auth/AuthProtectedRoute";
function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <MainProtectedRoute>
              <HomePage />
            </MainProtectedRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <MainProtectedRoute>
              <ProfilePage />
            </MainProtectedRoute>
          ),
        },

        { path: "*", element: <NotFoundPage /> },
      ],
    },
    {
      path: "",
      element: <AuthLayout />,
      children: [
        {
          path: "/auth/login",
          element: (
            <AuthProtectedRoute>
              <LoginPage />
            </AuthProtectedRoute>
          ),
        },
        {
          path: "/auth/register",
          element: (
            <AuthProtectedRoute>
              <RegisterPage />
            </AuthProtectedRoute>
          ),
        },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return (
    <>
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
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
