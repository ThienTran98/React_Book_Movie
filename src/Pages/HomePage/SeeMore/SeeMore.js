import React, { useRef, useState } from "react";

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
  return (
    <div className="text-center py-5 px-10">
      <div className="container mx-auto">
        <div>
          <ul className="items-stretch space-x-3 flex justify-center text-xl font-medium">
            <li className="flex py-2">
              <button className="flex items-center px-4 -mb-1 border-b-2 border-transparent focus:text-violet-400 focus:border-violet-400 hover:text-red-500">
                Điện Ảnh
              </button>
            </li>
            <li className="flex py-2">
              <button className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-red-500 focus:text-violet-400 focus:border-violet-400">
                Review
              </button>
            </li>
            <li className="flex py-2">
              <button className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-red-500 focus:text-violet-400 focus:border-violet-400 py-2">
                Khuyến Mãi
              </button>
            </li>
          </ul>
          <div className="py-8 mb-10">
            <button
              ref={refButton}
              onClick={handleClickShow}
              className="px-8 py-3 font-semibold border rounded border-slate-600 text-lime-500 hover:bg-red-500 hover:text-white"
            >
              XEM THÊM
            </button>
          </div>
          {show ? (
            <div>
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
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
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
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch...
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
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
                      Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa
                      Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã
                      tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, đã
                      tung...
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
                      Bằng Chứng Vô Hình tiết lộ thêm với khán giả một diễn viên
                      vô cùng đặc biệt, đi diễn như đi chơi và không hề nghe
                      theo sự chỉ đạo của đạ
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
                      <h2>
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
                      <h2>Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!</h2>
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
                      <h2>
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
                      <h2>
                        Antebellum - Trailer cuối cùng không hé lộ bất cứ thông
                        tin gì thêm
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
