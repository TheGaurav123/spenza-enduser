import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./context";
import RootLayout from "./pages/_root/RootLayout";
import AuthLayout from "./pages/_auth/AuthLayout";
import { AccountPage, HomePage, PlansPage } from "./pages/_root";
import { LoginPage } from "./pages/_auth";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/plans",
          element: <PlansPage />,
        },
        {
          path: "/account",
          element: <AccountPage />,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}
