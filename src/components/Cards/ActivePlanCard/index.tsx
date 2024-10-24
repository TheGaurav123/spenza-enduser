import {
  FiGlobe,
  FiPhoneCall,
  FiMessageSquare,
  FiDollarSign,
} from "react-icons/fi";
import { Button } from "antd";
import { MdAutorenew } from "react-icons/md";

const CardItems: any = [
  {
    title: "Coverage",
    value: "India",
    icon: <FiGlobe />,
  },
  {
    title: "Price",
    value: "$25 USD",
    icon: <FiDollarSign />,
  },
  {
    title: "Voice",
    value: "Unlimited",
    icon: <FiPhoneCall />,
  },
  {
    title: "SMS",
    value: "10000",
    icon: <FiMessageSquare />,
  },
];

export default function ActivePlanCard() {
  return (
    <div className="relative flex flex-col gap-3  bg-cover bg-no-repeat p-5 rounded-xl shadow text-activePlanCardText bg-activePlanCardBg">
      {/* <div className="absolute inset-0 bg-black opacity-4 rounded-2xl" /> */}
      <section className="relative flex justify-between text-xl font-semibold">
        <h3>ATT-02</h3>
        <h3>5GB</h3>
      </section>
      <div className="relative h-4 bg-gray-800 rounded-full">
        <div className="absolute h-4 bg-gray-100 w-[80%] rounded-full" />
      </div>
      <span className="text-sm">Expires in 10 Days</span>
      <div className="w-[100%] h-[.3px] rounded-full bg-activePlanCardText" />
      <div className="relative flex flex-col gap-6 my-3 text-sm">
        {CardItems.map((item, index) => {
          return (
            <section key={index} className="flex justify-between items-center">
              <span className="flex gap-1.5 justify-center items-center">
                {item.icon}
                {item.title}
              </span>
              <span className="font-semibold">{item.value}</span>
            </section>
          );
        })}
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <Button
          className="border-none relative bg-activePlanButtonBg text-activePlanButtonText"
          icon={<MdAutorenew />}
        >
          Renew
        </Button>
      </div>
    </div>
  );
}
