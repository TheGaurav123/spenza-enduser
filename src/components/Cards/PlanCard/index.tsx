import {
  FiGlobe,
  FiAirplay,
  FiPhoneCall,
  FiMessageSquare,
  FiCalendar,
  FiShoppingCart,
} from "react-icons/fi";
import { Button } from "antd";

const CardItems: any = [
  {
    title: "Coverage",
    value: "India",
    icon: <FiGlobe />,
  },
  {
    title: "Data",
    value: "1 GB",
    icon: <FiAirplay />,
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
  {
    title: "Validity",
    value: "7 Days",
    icon: <FiCalendar />,
  },
];

export default function PlanCard() {
  return (
    // <div className="relative flex flex-col gap-3 bg-[url('images/money.svg')] bg-cover bg-no-repeat text-white p-5 rounded-xl shadow">
    <div className="relative flex flex-col gap-3 bg-planCardBg text-planCardText p-5 rounded-xl shadow">
      <section className="relative flex justify-between text-xl font-semibold">
        <h3>ATT-02</h3>
        <h3>$9.50 USD</h3>
      </section>
      <div className="relative flex flex-col gap-6 my-3 text-sm">
        {CardItems.map((item: any, index: any) => {
          return (
            <section key={index} className="flex justify-between items-center">
              <span className="flex gap-1.5 items-center">
                {item.icon}
                {item.title}
              </span>
              <span className="font-semibold">{item.value}</span>
            </section>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button
          className="border-none relative bg-planButtonBg text-planButtonText"
          icon={<FiShoppingCart />}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
