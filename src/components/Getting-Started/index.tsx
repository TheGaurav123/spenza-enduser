import { Button, Image } from "antd";
import RocketImage from "../../assets/rocket.svg";

export default function GettingStarted() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center gap-6">
      <section className="flex flex-col items-center gap-3 text-lg">
        <Image
          src="logo.svg"
          alt="logo"
          width={200}
          height={120}
          preview={false}
        />
        <h2 className="text-center">
          Hey there! Ready to dive into{" "}
          <span className="font-semibold">Spenza?</span>
          <br />
          Let's go!
        </h2>
      </section>
      <Image src={RocketImage} alt="rocket" preview={false} />
      <Button type="primary" className="font-semibold rounded-full px-12 py-6">
        Get Started
      </Button>
    </div>
  );
}
