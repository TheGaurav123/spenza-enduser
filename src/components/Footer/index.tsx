import { menuItems } from "../../constants";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  return (
    <nav className="sticky bottom-0 bg-containerBg text-containerText shadow-gray-100 shadow-inner flex items-center justify-evenly py-3 text-xs ">
      {menuItems.map((item) => {
        const Icon = item.icon;
        if (item.title === "Account") {
          return (
            <Link
              to={item.path}
              className={`shadow rounded-full cursor-pointer flex flex-col items-center gap-1.5 ${
                location?.pathname === item.path && `text-primary`
              }`}
              key={item.key}
            >
              <Icon
                size={40}
                src={
                  "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                }
              />
            </Link>
          );
        }
        return (
          <Link
            to={item.path}
            className={`hover:text-primary cursor-pointer flex flex-col items-center gap-1.5 ${
              location?.pathname === item.path && `text-primary`
            }`}
            key={item.key}
          >
            <Icon />
            <span className="text-xs">{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
