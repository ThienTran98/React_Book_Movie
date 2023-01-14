import React from "react";
import { Button, message } from "antd";
import { Checkbox, Form, Input } from "antd";
import Lottie from "lottie-react";
import { NavLink, useNavigate } from "react-router-dom";
import bg_cute from "../../assets/130334-sweet-run-cycle.json";
import styles from "./login.module.css";
import { userService } from "../../services/userService";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../redux-toolkit/userSlice";
import { userLocalStorage } from "../../services/LocalStorageService";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    userService
      .postLogin(values)
      .then((res) => {
        dispatch(setUserLogin(res.data.content));
        userLocalStorage.set(res.data.content);
        message.success("Đăng nhập thành công");
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      })
      .catch((error) => {
        message.error(error.response.data.content);
      });
  };
  const onFinishFailed = (errorInfo) => {};

  return (
    <div className="mt-24 w-screen h-screen">
      <div className={`${styles.modalLogin} flex`}>
        <div className="container  my-auto px-10">
          <div className="bg-white mx-auto flex  rounded lg:w-3/5 lg:h-3/5 md:w-3/5 md:h-3/5">
            <div className="w-1/2 my-auto hidden lg:flex">
              <Lottie animationData={bg_cute} />
            </div>
            <div className="lg:w-1/2 w-full my-auto px-5 py-10">
              <h3 className="text-center text-2xl text-amber-600 mb-10">
                Đăng Nhập
              </h3>
              <Form
                name="basic"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
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
                <Form.Item className="flex justify-center">
                  <Button
                    className="bg-cyan-400 outline-offset-0 text-red-500"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              <div className="text-right mr-8 hover:text-red-600 text-green-400 underline underline-offset-1">
                <NavLink to="/register">
                  Bạn chưa có tài khoản ? Đăng ký
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
