import { Button, Form, Input, InputNumber, Upload } from "antd";
import { FiEdit3 } from "react-icons/fi";

export default function Account() {
  return (
    <div className="mt-10 max-w-md mx-auto">
      <section className="flex flex-col gap-2 items-center mb-8">
        <Upload
          // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          className="w-[100px] h-[100px] bg-cover"
          listType="picture-circle"
          fileList={[
            {
              uid: "-1",
              name: "avatar.png",
              status: "done",
              url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            },
          ]}
        />
        <h2 className="text-xl xl:text-2xl">Akash Gaurav</h2>
      </section>
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 16,
        }}
        className="flex flex-col lg:gap-2 xl:gap-4 px-4"
      >
        <Form.Item
          label="Address"
          name={"address"}
          rules={[{ required: true, message: "Please enter a valid address" }]}
        >
          <Input
            className="bg-transparent"
            placeholder="Schamberger Crescent"
          />
        </Form.Item>
        <Form.Item
          label="City"
          name={"city"}
          rules={[{ required: true, message: "Please enter a valid city" }]}
        >
          <Input className="bg-transparent" placeholder="Seymourburgh" />
        </Form.Item>
        <Form.Item
          label="State"
          name={"state"}
          rules={[{ required: true, message: "Please enter a valid state" }]}
        >
          <Input className="bg-transparent" placeholder="AZ" />
        </Form.Item>
        <Form.Item
          label="Postal Code"
          name={"postalCode"}
          rules={[
            { required: true, message: "Please enter a valid postal-code" },
          ]}
        >
          <Input className="bg-transparent" placeholder="41416" />
        </Form.Item>
        <Form.Item
          label="Department"
          name={"department"}
          rules={[
            { required: true, message: "Please enter a valid department" },
          ]}
        >
          <Input className="bg-transparent" placeholder="Management" />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name={"phoneNumber"}
          rules={[
            { required: true, message: "Please enter a valid Phonenumber" },
          ]}
        >
          <InputNumber
            placeholder="+91 123456789"
            className="w-[100%] bg-transparent"
          />
        </Form.Item>
        <Form.Item className="w-[100%] flex justify-center">
          <Button
            htmlType="submit"
            // disabled
            size="middle"
            className="mt-3"
            type="primary"
            icon={<FiEdit3 />}
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
