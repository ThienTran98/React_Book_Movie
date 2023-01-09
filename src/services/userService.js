import { base_URL } from "./configURL";
//Cách viết 1 :  cách viết tạo các API chung 1 Object để dễ quản lí
export const userService = {
  postLogin: (data) => {
    return base_URL.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  postRegister: (data) => {
    return base_URL.post("/api/QuanLyNguoiDung/DangKy", data);
  },
};
