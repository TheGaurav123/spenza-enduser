import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateComponent({
  children,
}: {
  children: ReactNode;
}) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) Navigate({ to: "/login" });
  return children;
}
