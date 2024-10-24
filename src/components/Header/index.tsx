import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Header() {
  const { assets } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Error while logging-out", error);
    }
  };
  return (
    <section className="flex justify-between items-center px-4 py-2 sticky top-0 bg-containerBg text-containerText z-50 shadow-lg shadow-gray-300">
      <img
        src={assets.logo || "logo.svg"}
        alt="logo"
        height={50}
        className="w-[140px] h-[55px] md:h-[45px]"
      />
      <div className="flex gap-2 text-sm cursor-pointer">
        <Button
          className="text-containerText"
          onClick={handleLogout}
          icon={<AiOutlineLogout />}
          type="text"
        >
          Logout
        </Button>
      </div>
    </section>
  );
}
