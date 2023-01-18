import React from "react";

export default function FooterTablet() {
  return (
    <footer className="py-6 px-10 bg-gray-800 text-gray-50 w-full ">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-sm mx-auto">
            <div className="leading-8">Thỏa thuận sử dụng</div>
            <div className="leading-8">Chính sách bảo mật</div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
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
        </div>
        <div className="h-0.5 w-full bg-stone-700 mt-4 mb-4"></div>
        <div className="grid-cols-3  mt-6 items-center   grid">
          <div className="mx-auto">
            <img
              width="100px"
              src="./img/data_image_jpeg;bas… (4).jpg"
              alt=""
            />
          </div>
          <div className="text-center text-sm">
            <h2 className="text-lg">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h2>
            <h4>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </h4>
            <p>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay
              đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư
              Thành phố Hồ Chí Minh cấp. Số Điện Thoại (Hotline): 1900 545 436
            </p>
          </div>
          <div className="mx-auto">
            <img
              width="100px"
              src="./img/daThongBao-logo.cb85045e.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
