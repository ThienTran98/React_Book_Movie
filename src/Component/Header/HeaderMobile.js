import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserLogin } from "../../redux-toolkit/userSlice";
import { userLocalStorage } from "../../services/LocalStorageService";

export default function HeaderTablet() {
  const [show, setShow] = useState(false);

  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    setShow(!show);
    userLocalStorage.remove();
    dispatch(setUserLogin(null));
    navigate("/login");
  };
  const handleRenderUser = () => {
    if (user) {
      return (
        <>
          <div className="flex items-center mb-3">
            <img
              alt="avatar"
              className="w-8 h-8 mr-4 rounded-full ring-2 ring-offset-4 ring-violet-400 ring-offset-gray-800"
              src="https://source.unsplash.com/40x40/?portrait?1"
            />
            <h3 className="text-lg">{user.hoTen}</h3>
          </div>
          <NavLink onClick={handleLogout} className="" to="/login">
            <button className="self-center text-lg text-gray-400 rounded hover:text-red-600 ">
              Đăng xuất
            </button>
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink
            onClick={() => {
              setShow(!show);
            }}
            to="/login"
            className="flex items-center text-gray-400 hover:text-red-500 mb-2"
          >
            <div className="w-8 h-8 rounded-full bg-slate-300  flex items-center justify-center hover:text-red-500 mr-3">
              <FontAwesomeIcon className="text-lg" icon={faUser} />
            </div>
            Đăng Nhập
          </NavLink>
          <NavLink
            onClick={() => {
              setShow(!show);
            }}
            to="/register"
            className="flex items-center text-gray-400 hover:text-red-500 mb-2"
          >
            <div className="w-8 h-8 rounded-full bg-slate-300  flex items-center justify-center hover:text-red-500 mr-3">
              <FontAwesomeIcon className="text-lg" icon={faUser} />
            </div>
            Đăng Ký
          </NavLink>
        </>
      );
    }
  };
  return (
    <header className="p-4 bg-gray-800 text-red-500 shadow-md fixed top-0 right-0 left-0 z-30">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            className="w-20"
            src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
            alt=""
          />
        </NavLink>
        <button
          className="p-4 shrink-0 relative"
          onClick={() => {
            setShow(!show);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {show ? (
          <div className="bg-blend-overlay fixed bg-black-rgba left-0 top-0 right-0 bottom-0">
            <div className="fixed top-0 right-0 bottom-0 w-80 bg-slate-100 max-w-full p-5">
              <span>
                <FontAwesomeIcon
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="text-2xl absolute top-4 right-4 p-2 z-10 text-gray-400 hover:text-red-500 cursor-pointer hover:bg-slate-300 "
                  icon={faXmark}
                />
              </span>
              <div className="mt-8">{handleRenderUser()}</div>
              <div className="w-full h-px bg-red-600 mb-2 mt-3"></div>
              <div className=" leading-8">
                <ul>
                  <li
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="text-gray-400 block no-underline text-lg leading-8 hover:text-red-500"
                  >
                    <NavLink to="/">Trang chủ</NavLink>
                  </li>
                  <li
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="text-gray-400 block no-underline text-lg leading-8 hover:text-red-500"
                  >
                    <a href="#lichchieu"> Lịch chiếu</a>
                  </li>
                  <li className="text-gray-400 block no-underline text-lg leading-8 hover:text-red-500">
                    <a href="#cumrap">Cụm rạp</a>
                  </li>
                  <li
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="text-gray-400 block no-underline text-lg leading-8 hover:text-red-500"
                  >
                    <a href="#tintuc">Tin tức</a>
                  </li>
                  <li className="text-gray-400 block no-underline text-lg leading-8 hover:text-red-500">
                    <a href="">Ứng dụng</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
