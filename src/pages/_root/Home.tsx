import { ActivePlanCard } from "../../components";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <ActivePlanCard />
    </div>
  );
}
