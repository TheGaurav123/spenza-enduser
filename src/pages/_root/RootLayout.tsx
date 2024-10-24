import { ConfigProvider } from "antd";
import { useContext, useEffect } from "react";
import { Footer, Header } from "../../components";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../context";
import PrivateComponent from "../../components/PrivateComponent";

export default function RootLayout() {
  const { assets } = useContext(GlobalContext);

  const handleSetAssetsToTailwind = () => {
    document.documentElement.style.setProperty(
      "--primary-color",
      assets.primaryColor
    );
    document.documentElement.style.setProperty(
      "--active-plan-card-button-bg",
      assets.activePlanButtonBackgroundColor
    );
    document.documentElement.style.setProperty(
      "--active-plan-card-button-text",
      assets.activePlanButtonTextColor
    );
    document.documentElement.style.setProperty(
      "--active-plan-card-bg-color",
      assets.activePlanCardBackgroundColor
    );
    document.documentElement.style.setProperty(
      "--active-plan-card-text-color",
      assets.activePlanCardTextColor
    );
    document.documentElement.style.setProperty(
      "--plan-card-bg-color",
      assets.planCardBackgroundColor
    );
    document.documentElement.style.setProperty(
      "--plan-card-text-color",
      assets.planCardTextColor
    );
    document.documentElement.style.setProperty(
      "--plan-card-button-bg",
      assets.planButtonBackgroundColor
    );
    document.documentElement.style.setProperty(
      "--plan-card-button-text",
      assets.planButtonTextColor
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

  useEffect(handleSetAssetsToTailwind, [assets]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: assets.primaryColor,
          borderRadius: assets.borderRadius,
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <div className="min-h-[100dvh] flex flex-col gap-3 font-['Poppins'] bg-containerBg text-containerText">
        <Header />
        {/* Content */}
        <div className="flex-1 overflow-auto px-3">
          <PrivateComponent>
            <Outlet />
          </PrivateComponent>
        </div>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
