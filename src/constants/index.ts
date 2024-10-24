import { Avatar } from "antd";
import { FiMenu, FiHome } from "react-icons/fi";

export const menuItems = [
  {
    key: 1,
    title: "Home",
    path: "/",
    icon: FiHome,
  },
  {
    key: 2,
    title: "Plans",
    path: "/plans",
    icon: FiMenu,
  },
  {
    key: 3,
    title: "Account",
    path: "/account",
    icon: Avatar,
  },
];
