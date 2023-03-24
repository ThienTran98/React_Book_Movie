import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserLogin } from "../../redux-toolkit/userSlice";
import { userLocalStorage } from "../../services/LocalStorageService";

export default function HeaderDesktop() {
  let user = useSelector((state) => {
    return state.userSlice.user;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    userLocalStorage.remove();
    dispatch(setUserLogin(null));
    navigate("/login");
  };
  const renderUserNav = () => {
    if (user) {
      return (
        <>
          <button className="self-center px-8 py-3 border-solid border-r flex items-center">
            <img
              alt=""
              className="w-8 h-8 mr-4 rounded-full ring-2 ring-offset-4 ring-violet-400 ring-offset-gray-800"
              src="https://source.unsplash.com/40x40/?portrait?1"
            />
            {user?.hoTen}
          </button>
          <NavLink className="" to="/login">
            <button
              onClick={handleLogout}
              className="self-center px-8 py-3 rounded hover:text-red-600 transition duration-150 ease-in-out "
            >
              Đăng xuất
            </button>
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/register">
            <button className="self-center px-8 py-3 hover:text-red-600 border-solid border-rose-600 border-r transition duration-150 ease-in-out">
              <FontAwesomeIcon icon={faUser} /> Đăng Ký
            </button>
          </NavLink>
          <NavLink to="/login">
            <button className="self-center px-8 py-3 hover:text-red-600  transition duration-150 ease-in-out">
              <FontAwesomeIcon icon={faUser} /> Đăng Nhập
            </button>
          </NavLink>
        </>
      );
    }
  }; //bg-white-rgba
  return (
    <header className="p-4 bg-gray-800 text-red-400 shadow-lg fixed top-0 right-0 left-0 z-30">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
            alt=""
          />
        </NavLink>
        <ul className="items-stretch space-x-3 flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#lichchieu"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent focus:text-violet-500 focus:border-violet-500 hover:text-slate-200"
            >
              Lịch Chiếu
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="!#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent focus:text-violet-500 focus:border-violet-500 hover:text-slate-200"
            >
              Cụm Rạp
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#tintuc"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent focus:text-violet-500 focus:border-violet-500 hover:text-slate-200"
            >
              Tin Tức
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="!#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent focus:text-violet-500 focus:border-violet-500 hover:text-slate-200"
            >
              Ứng Dụng
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 flex">{renderUserNav()}</div>
      </div>
    </header>
  );
}
