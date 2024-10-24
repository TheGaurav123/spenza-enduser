import { createContext, ReactNode, useEffect, useState } from "react";

export const GlobalContext = createContext({
  assets: {
    primaryColor: "",
    containerBackgroundColor: "",
    containerTextColor: "",
    activePlanCardBackgroundColor: "",
    activePlanCardTextColor: "",
    planCardBackgroundColor: "",
    planCardTextColor: "",
    activePlanButtonBackgroundColor: "",
    activePlanButtonTextColor: "",
    planButtonBackgroundColor: "",
    planButtonTextColor: "",
    logo: "",
    borderRadius: 0,
  },
  isDemoMode: false,
});

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isDemoMode, setIsDemoMode] = useState<boolean>(false);
  const [assets, setAssets] = useState({
    primaryColor: "#D7DF23",
    containerBackgroundColor: "white",
    containerTextColor: "black",
    activePlanCardBackgroundColor: "black",
    activePlanCardTextColor: "white",
    activePlanButtonBackgroundColor: "black",
    activePlanButtonTextColor: "white",
    planCardBackgroundColor: "teal",
    planCardTextColor: "white",
    planButtonBackgroundColor: "white",
    planButtonTextColor: "black",
    logo: "",
    borderRadius: 6,
  });

  const loadState = async () => {
    try {
      const location = window.location.href?.split("?")?.[1]?.split("&");
      const isDemoMode = location?.[0] === "isDemo=true";
      if (isDemoMode) {
        setIsDemoMode(true);
        const primaryColor = `#${location?.[1]?.split("=")?.[1]}` || "#DDD432";
        const borderRadius = Number(location?.[2]?.split("=")?.[1]) || 8;
        const activePlanCardBackgroundColor =
          `#${location?.[3]?.split("=")?.[1]}` || "black";
        const activePlanCardTextColor =
          `#${location?.[4]?.split("=")?.[1]}` || "white";
        const planCardBackgroundColor =
          `#${location?.[5]?.split("=")?.[1]}` || "white";
        const planCardTextColor = `#${location?.[6]?.split("=")?.[1]}` || "red";
        const logo = location?.[7]?.split("=")?.[1];

        setAssets({
          ...assets,
          logo,
          primaryColor,
          borderRadius,
          activePlanCardBackgroundColor,
          activePlanCardTextColor,
          planCardBackgroundColor,
          planCardTextColor,
          activePlanButtonBackgroundColor: activePlanCardTextColor,
          activePlanButtonTextColor: activePlanCardBackgroundColor,
          planButtonBackgroundColor: planCardTextColor,
          planButtonTextColor: planCardBackgroundColor,
        });
      } else {
        setAssets({
          primaryColor: "#D7DF23",
          containerBackgroundColor: "white",
          containerTextColor: "black",
          activePlanCardBackgroundColor: "black",
          activePlanCardTextColor: "white",
          activePlanButtonBackgroundColor: "black",
          activePlanButtonTextColor: "white",
          planCardBackgroundColor: "teal",
          planCardTextColor: "white",
          planButtonBackgroundColor: "white",
          planButtonTextColor: "black",
          logo: "",
          borderRadius: 6,
        });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadState();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <GlobalContext.Provider value={{ assets, isDemoMode }}>
      {children}
    </GlobalContext.Provider>
  );
}
