import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AuthLayout from "./Components/Layouts/AuthLayout";
import MainLayout from "./Components/Layouts/MainLayout";
import MainProtectedRoute from "./Components/MainProtectedRoute";
import AuthProtectedRoute from "./Components/Auth/AuthProtectedRoute";
import PostDetailsPage from "./Pages/PostDetails/PostDetailsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export let queryClient = new QueryClient();

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
          path: "/post-details/:id",
          element: (
            <MainProtectedRoute>
              <PostDetailsPage />
            </MainProtectedRoute>
          ),
        },
        {
          path: "/post-details",
          element: (
            <MainProtectedRoute>
              <PostDetailsPage />
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers} />
      </QueryClientProvider>
    </>
  );
}

export default App;
