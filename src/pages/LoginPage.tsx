import { Button, Form, Input, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/entities/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate } = useLoginMutation();
  const login = (values: any) => {
    mutate(values, {
      onSuccess: () => navigate("/"),
      onError: (error) => {
        console.error(error);
      },
    });
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-primary flex items-center justify-center">
      <div className="w-[400px] h-[45vh] bg-white rounded-lg py-8 px-4 flex flex-col justify-around">
        <Typography.Title level={2} className="text-center">
          Login to Admin Panel
        </Typography.Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={login}
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Superadmin" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="flex items-center gap-3 justify-center"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
