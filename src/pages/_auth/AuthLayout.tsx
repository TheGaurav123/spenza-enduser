import { ConfigProvider } from "antd";
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function AuthLayout() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const { assets } = useContext(GlobalContext);

  const handleSetAssetsToTailwind = () => {
    document.documentElement.style.setProperty(
      "--primary-color",
      assets.primaryColor
    );
    document.documentElement.style.setProperty(
      "--container-bg-color",
      assets.containerBackgroundColor
    );
    document.documentElement.style.setProperty(
      "--container-text-color",
      assets.containerTextColor
    );
  };

  if (isAuthenticated) Navigate({ to: "/" });

  useEffect(handleSetAssetsToTailwind, [assets]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: assets.primaryColor,
          borderRadius: assets.borderRadius,
          colorBgContainer: assets.containerBackgroundColor,
        },
      }}
    >
      <div className="min-h-[100dvh] flex flex-col gap-3 font-['Poppins'] bg-containerBg text-containerText">
        <div className="flex-1 overflow-auto px-3">
          <Outlet />
        </div>
      </div>
    </ConfigProvider>
  );
}
