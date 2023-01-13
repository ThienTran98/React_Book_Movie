import React, { useRef, useState } from "react";
import { Tabs } from "antd";
const onChange = (key) => {};

export default function SeeMore() {
  const [show, setShow] = useState(false);
  const refButton = useRef();
  const handleClickShow = () => {
    setShow(!show);
    if (!show) {
      refButton.current.classList.add("hidden");
    } else {
      refButton.current.classList.remove("hidden");
    }
  };
  const handleRenderFilm = () => {
    return show ? (
      <div className="tabsContent">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              className="rounded"
              width="100%"
              src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold">
                <a href="https://www.vietnamplus.vn/bom-tan-inception-tai-xuat-rap-viet-nam-truoc-ngay-cong-chieu-tenet/656888.vnp">
                  TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                </a>
              </h2>
              <p className="text-justify mt-2 text-sm">
                Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông
                báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị
                trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded"
              width="100%"
              src="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold">
                <a href="https://cand.com.vn/Chuyen-de/nguoi-nu-trong-dien-anh-viet-gan-day-van-mau-nhan-vat-ay-nan-nhan-chien-tranh-i656797/">
                  Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
                </a>
              </h2>
              <p className="text-justify mt-2 text-sm">
                Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô Hình
                mang đến một góc nhìn mới về hình ảnh những người phụ nữ thời
                hiện đại. Điều đó được thể hiện qua câu chuyện về hai người phụ
                nữ cùng hợp sức để vạch...
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid md:grid grid-cols-3 gap-2 mt-4">
          <div>
            <img
              className="rounded"
              src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold h-14">
                Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
              </h2>
              <p className="text-justify mt-2 text-sm">
                Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên
                Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra
                trailer đầu tiên, hé lộ nội dung cốt truyện, đã tung...
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded"
              src="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518743844.png"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold h-14">
                Diễn viên đặc biệt của Bằng Chứng Vô Hình
              </h2>
              <p className="text-justify mt-2 text-sm">
                Bằng Chứng Vô Hình tiết lộ thêm với khán giả một diễn viên vô
                cùng đặc biệt, đi diễn như đi chơi và không hề nghe theo sự chỉ
                đạo của đạ
              </p>
            </div>
          </div>
          <div className="grid-rows-4 grid gap-2">
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  RÒM tung trailer hé lộ cuộc sống của dân chơi số đề
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì
                  thêm
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={handleClickShow}
            className="px-8 py-3 font-semibold border rounded border-slate-600 text-lime-500 hover:bg-red-500 hover:text-white"
          >
            THU GỌN
          </button>
        </div>
      </div>
    ) : null;
  };
  const handleRenderReview = () => {
    return show ? (
      <div className="tabsContent">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              className="rounded"
              width="100%"
              src="https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold">
                <a href="https://www.vietnamplus.vn/bom-tan-inception-tai-xuat-rap-viet-nam-truoc-ngay-cong-chieu-tenet/656888.vnp">
                  [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm
                  động của Khả Như và Kiều Minh Tuấn
                </a>
              </h2>
              <p className="text-justify mt-2 text-sm">
                Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện
                tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded"
              width="100%"
              src="https://s3img.vcdn.vn/123phim/2020/03/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold">
                <a href="https://cand.com.vn/Chuyen-de/nguoi-nu-trong-dien-anh-viet-gan-day-van-mau-nhan-vat-ay-nan-nhan-chien-tranh-i656797/">
                  [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình
                  thân
                </a>
              </h2>
              <p className="text-justify mt-2 text-sm">
                Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và
                cảm xúc về tình cảm gia đình.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid md:grid grid-cols-3 gap-2 mt-4">
          <div>
            <img
              className="rounded"
              src="https://s3img.vcdn.vn/123phim/2020/02/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold h-14">
                [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người bệnh hoạn
                vô hình?
              </h2>
              <p className="text-justify mt-2 text-sm">
                Phiên bản hiện đại của The Invisible Man là một trong những phim
                kinh dị xuất sắc nhất năm nay.
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded"
              src="https://s3img.vcdn.vn/123phim/2020/02/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold h-14">
                [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa
              </h2>
              <p className="text-justify mt-2 text-sm">
                Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái kết
                lại không tương xứng với phần mở đầu hứa hẹn.
              </p>
            </div>
          </div>
          <div className="grid-rows-4 grid gap-2">
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  [Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu thanh
                  lầy lội
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/02/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967038683.jpg"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ chưa bao
                  giờ là việc dễ dàng
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/02/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958389162.jpg"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời mình qua
                  phim ảnh
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg"
                alt=""
              />
              <div>
                <h2>
                  [Review] Birds of Prey - Màn lột xác hoành tráng của Harley
                  Quinn và DC
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={handleClickShow}
            className="px-8 py-3 font-semibold border rounded border-slate-600 text-lime-500 hover:bg-red-500 hover:text-white"
          >
            THU GỌN
          </button>
        </div>
      </div>
    ) : null;
  };

  const handleRenderDiscount = () => {
    return show ? (
      <div className="tabsContent">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              className="rounded"
              width="100%"
              src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold">
                <a href="https://www.facebook.com/phimsapchieu/photos/review-phim-b%E1%BA%AFc-kim-thang%C4%91%C3%A1nh-gi%C3%A1-510kh%C3%B4ng-th%E1%BB%83-ch%E1%BA%A5p-nh%E1%BA%ADn-%C4%91%C6%B0%E1%BB%A3csau-th%E1%BA%A5t-s%C6%A1n-t%C3%A2m-li/2546320638935314/">
                  [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim
                  Thang
                </a>
              </h2>
              <p className="text-justify mt-2 text-sm">
                123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch
                khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded"
              width="100%"
              src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold">
                <a href="https://www.megagscinemas.vn/uu-dai/sinh-nhat-mega-gs-san-qua-cuc-da/">
                  Sinh Nhật Mega GS
                </a>
              </h2>
              <p className="text-justify mt-2 text-sm">
                Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại
                đến tháng 8, tháng sinh nhật của Mega GS Cinemas.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden  lg:grid md:grid grid-cols-3 gap-2 mt-4">
          <div>
            <img
              className="rounded"
              src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold h-14">
                [123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa
              </h2>
              <p className="text-justify mt-2 text-sm">
                Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded"
              src="https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg"
              alt=""
            />
            <div>
              <h2 className="hover:text-red-500 mt-4 text-xl font-semibold h-14">
                [Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng
              </h2>
              <p className="text-justify mt-2 text-sm">
                Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng
                các Stars Hà Nội loạt phần quà siêu hấp dẫn.
              </p>
            </div>
          </div>
          <div className="grid-rows-4 grid gap-2">
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2019/04/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2019/04/123phim-ban-la-fan-cung-marvel-15562538560772.jpg"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  [123Phim] Bạn Là Fan Cứng Marvel?
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  RÒM tung trailer hé lộ cuộc sống của dân chơi số đề
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
                className="rounded"
                src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg"
                alt=""
              />
              <div>
                <h2 className="hover:text-red-500">
                  Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì
                  thêm
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={handleClickShow}
            className="px-8 py-3 font-semibold border rounded border-slate-600 text-lime-500 hover:bg-red-500 hover:text-white"
          >
            THU GỌN
          </button>
        </div>
      </div>
    ) : null;
  };
  const items = [
    {
      key: "1",
      label: `Điện Ảnh`,
      children: <div className="text-slate-800">{handleRenderFilm()}</div>,
    },
    {
      key: "2",
      label: `Review`,
      children: <div className="text-slate-800">{handleRenderReview()}</div>,
    },
    {
      key: "3",
      label: `Khuyến Mãi`,
      children: <div className="text-slate-800">{handleRenderDiscount()}</div>,
    },
  ];

  return (
    <div id="tintuc" className="text-center py-5 px-10">
      <div className="py-8 mb-10">
        <Tabs
          centered
          size="large"
          style={{ color: "#fb4226" }}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
        <button
          ref={refButton}
          onClick={handleClickShow}
          className="px-8 py-3 font-semibold border rounded border-slate-600 text-lime-500 hover:bg-red-500 hover:text-white"
        >
          XEM THÊM
        </button>
      </div>
    </div>
  );
}
