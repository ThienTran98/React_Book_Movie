import React from "react";

export default function FooterMobile() {
  return (
    <footer className="py-6 bg-gray-800 text-gray-50 w-full">
      <div className="container mx-auto px-10">
        <div className="grid-cols-2 grid gap-3 text-sm font-normal items-center">
          <div>Thỏa thuận sử dụng</div>
          <div>Chính sách bảo mật</div>
        </div>
        <div className="justify-center items-center flex mt-8">
          <div className="mr-2">
            <a href="https://www.facebook.com/">
              <img
                style={{ width: 40, borderRadius: "50%" }}
                src="./img/data_image_png;base… (15).png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://zaloweb.me/">
              <img
                style={{ width: 40, borderRadius: "50%" }}
                src="./img/download.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="h-0.5 w-full bg-slate-600 mt-4 mb-4"></div>
        <div className="flex justify-center">
          <img width="100px" src="./img/data_image_jpeg;bas… (4).jpg" alt="" />
        </div>
        <div className="text-center text-sm">
          <h3>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h3>
          <h4 className="text-xs leading-5">
            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
            Minh, Việt Nam.
          </h4>
          <p className="text-xs leading-5">
            Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay đổi
            lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành
            phố Hồ Chí Minh cấp.
          </p>
          <h3 className="text-xs leading-5">
            Số Điện Thoại (Hotline): 1900 545 436
          </h3>
        </div>
        <div className="flex justify-center">
          <img width="100px" src="./img/daThongBao-logo.cb85045e.png" alt="" />
        </div>
      </div>
    </footer>
  );
}
