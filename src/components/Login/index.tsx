import { Button, Form, Image, Input } from "antd";
import LoginImage from "../../assets/login.svg";

export default function Login() {
  return (
    <section className="flex-1 flex flex-col justify-center items-center gap-6">
      <Image
        src="logo.svg"
        alt="logo"
        preview={false}
        width={200}
        height={120}
      />
      <Image src={LoginImage} alt="login" preview={false} />
      <Form size="large">
        <Form.Item
          label="Email"
          name={"email"}
          rules={[{ required: true, message: "Please enter a valid email" }]}
        >
          <Input placeholder="jhondoe@spenza.com" />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"password"}
          rules={[{ required: true, message: "Please enter a valid password" }]}
        >
          <Input.Password placeholder="********" />
        </Form.Item>
        <Form.Item className="flex justify-center">
          <Button
            htmlType="submit"
            type="primary"
            className="rounded-full px-12 py-6 mt-6"
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
