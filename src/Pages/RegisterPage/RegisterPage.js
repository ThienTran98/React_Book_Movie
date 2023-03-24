import React from "react";
import { Button, Select, Form, Input, message } from "antd";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import { userService } from "../../services/userService";
import styles from "./register.module.css";
import bg_plane from "../../assets/78714-plane.json";

export default function RegisterPage() {
  const onFinish = (values) => {
    userService
      .postRegister(values)
      .then((res) => {
        message.success("Đăng ký thành công");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  const onFinishFailed = (errorInfo) => {};
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="85">+85</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="88">+88</Option>
      </Select>
    </Form.Item>
  );
  const prefixSelectorGroup = (
    <Form.Item noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="GP05">GP05</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="mt-24 h-screen w-screen">
      <div className={`${styles.modalRegister} flex`}>
        <div className=" container my-auto flex justify-center">
          <div className=" h-3/5 w-2/3 flex bg-white rounded p-5 ">
            <div className="w-1/2 my-auto hidden lg:flex md:flex">
              <Lottie animationData={bg_plane} />
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full my-auto ">
              <h2 className="text-center text-2xl text-amber-600 mb-4">
                Đăng ký
              </h2>
              <Form
                name="basic"
                labelCol={{
                  span: 10,
                }}
                wrapperCol={{
                  span: 14,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="taiKhoan"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="maNhom"
                  label="Group"
                  hidden="true"
                  initialValue="GP05"
                >
                  <Input
                    addonBefore={prefixSelectorGroup}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="matKhau"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["matKhau"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("matKhau") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  className="hidden lg:block md:block "
                  name="hoTen"
                  label="Nickname"
                  tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your nickname!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="soDt"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item className="flex items-center justify-center">
                  <Button
                    className="bg-cyan-400 outline-offset-0 text-red-500"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              <div className="text-right mr-8 hover:text-red-600 text-green-400 underline underline-offset-1">
                <NavLink to="/login">Bạn đã có tài khoản ? Đăng nhập</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
