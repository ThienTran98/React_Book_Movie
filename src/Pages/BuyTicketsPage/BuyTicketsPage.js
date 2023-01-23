import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setUserBookTickets } from "../../redux-toolkit/userSlice";
import { movieService } from "../../services/movieService";
import styles from "./buyTickets.module.css";
import "./buyTickets.css";
import { message } from "antd";

export default function BuyTicketsPage() {
  const [showTimes, setShowTimes] = useState(null);
  const codeSchedule = useParams();
  const dispatch = useDispatch();
  const userBookTicket = useSelector((state) => {
    return state.userSlice.userBookTickets;
  });
  const handleClickBookItem = (chair) => {
    dispatch(setUserBookTickets(chair));
  };

  useEffect(() => {
    movieService.getListTheaterBookTickets(codeSchedule.id).then((res) => {
      setShowTimes(res.data.content);
    });
  }, [codeSchedule.id]);
  const handleTotalPrice = () => {
    return userBookTicket.reduce((acc, cur) => {
      return acc + cur.giaVe;
    }, 0);
  };
  const handlePostListBookItem = () => {
    movieService
      .postTicketManagement({
        maLichChieu: codeSchedule.id,
        danhSachVe: userBookTicket,
      })
      .then((res) => {
        message.success(res.data.content);
      });
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };
  const handleRenderChairs = () => {
    return showTimes?.danhSachGhe.map((chair, index) => {
      let classGheVip = chair.loaiGhe === "Vip" ? "gheVip" : "";

      let classGheDaDat = chair.daDat === true ? "gheDaDat" : "";
      // Ghế đang đặt ; lúc chưa có trong mảng mảng thì k add class
      let classGheDangDat = "";
      // kiểm tra trong mảng có ghế chưa nếu có thì add còn k thì '""
      let indexGheDaDangDat = userBookTicket.findIndex((gheDangDat) => {
        return gheDangDat.maGhe === chair.maGhe;
      });
      if (indexGheDaDangDat !== -1) {
        classGheDangDat = "gheDangDat";
      } else {
        classGheDangDat = "";
      }

      return (
        <>
          <button
            onClick={() => {
              handleClickBookItem(chair);
            }}
            disabled={chair.daDat === true}
            key={index}
            className={`ghe w-9 h-9 md:w-8 md:h-8  ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
          >
            {chair.tenGhe}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </>
      );
    });
  };
  const handleRenderChairsMobile = () => {
    return showTimes?.danhSachGhe.map((chair, index) => {
      let classGheVip = chair.loaiGhe === "Vip" ? "gheVip" : "";

      let classGheDaDat = chair.daDat === true ? "gheDaDat" : "";
      // Ghế đang đặt ; lúc chưa có trong mảng mảng thì k add class
      let classGheDangDat = "";
      // kiểm tra trong mảng có ghế chưa nếu có thì add còn k thì '""
      let indexGheDaDangDat = userBookTicket.findIndex((gheDangDat) => {
        return gheDangDat.maGhe === chair.maGhe;
      });
      if (indexGheDaDangDat !== -1) {
        classGheDangDat = "gheDangDat";
      } else {
        classGheDangDat = "";
      }

      return (
        <>
          <button
            onClick={() => {
              handleClickBookItem(chair);
            }}
            disabled={chair.daDat === true}
            key={index}
            className={`ghe w-6 h-6 text-sm ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
          >
            {chair.tenGhe}
          </button>
          {(index + 1) % 8 === 0 ? <br /> : ""}
        </>
      );
    });
  };
  return (
    <div className={`mt-24 ${styles.bgMovie}`}>
      <div className="px-10 container pb-20 mx-auto ">
        {/* desktop */}
        <div className="lg:grid grid-cols-12 gap-4 hidden">
          <div className="col-span-9 mt-10 mx-auto">
            <div className={`${styles.trapezoid}`}></div>
            <h2 className="text-red-600 pt-5 font-bold text-xl text-center">
              Màn hình
            </h2>
            <div className="mt-5">{handleRenderChairs()}</div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center text-white">
                <div className="w-8 h-8  rounded m-1 bg-lime-500 border-lime-500"></div>
                Đang chọn
              </div>
              <div className="flex items-center text-white">
                <div className="w-8 h-8 bg-red-900 rounded m-1 border-red-900 flex items-center justify-center"></div>
                Đã Đặt
              </div>
              <div className="flex items-center text-white ">
                <div className="w-8 h-8  rounded m-1 bg-stone-200 border-stone-200"></div>
                Thường
              </div>
              <div className="flex items-center text-white ">
                <div className="w-8 h-8 bg-red-500 border-red-500 rounded m-1"></div>
                Vip(Prime)
              </div>
            </div>
          </div>

          <div className="col-span-3 mt-10 ">
            <div className="bg-slate-400 px-5 text-slate-200 ">
              <div className="border-b py-4 text-slate-800 ">
                Thành Tiền :
                <span className="text-rose-500">
                  {handleTotalPrice().toLocaleString() + "VND" || "0 VND"}
                </span>
              </div>
              <div className="border-b py-4 text-slate-800">
                Cụm Rạp :
                <span className="">{showTimes?.thongTinPhim.tenCumRap}</span>
              </div>
              <div className="border-b py-4 text-slate-800">
                Địa Chỉ :
                <span className="">{showTimes?.thongTinPhim.diaChi}</span>
              </div>
              <div className="border-b py-4 text-slate-800">
                Ngày Chiếu :
                <span className="">{showTimes?.thongTinPhim.ngayChieu}</span>
              </div>
              <div className="border-b py-4 text-slate-800">
                Tên Phim :
                <span className="">{showTimes?.thongTinPhim.tenPhim}</span>
              </div>
              <div className="border-b py-4 text-slate-800">
                Rạp :<span className="">{showTimes?.thongTinPhim.tenRap}</span>
              </div>
              <div className="border-b py-4 text-slate-800">
                Suất Chiếu :
                <span className="">{showTimes?.thongTinPhim.gioChieu}</span>
              </div>
              <div className="border-b py-4 text-slate-800">
                Ghế Đang Chọn :
                {userBookTicket.map((item) => {
                  return (
                    <span className="text-rose-500 inline-block ">
                      Ghế{item.tenGhe},
                    </span>
                  );
                })}
              </div>

              <div className="py-4 text-center">
                <button
                  onClick={handlePostListBookItem}
                  className="text-red-500 px-4 py-2 rounded bg-slate-200 hover:bg-red-500 hover:text-white ease-in-out duration-300 transition"
                >
                  Đặt Vé
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* tablet */}
        <div className="pt-10 hidden sm:hidden md:block lg:hidden">
          <div className="">
            <div className={` ${styles.trapezoid}`}></div>
            <h2 className="text-red-600 pt-5 font-bold text-xl text-center">
              Màn hình
            </h2>
            <div className="pt-10 text-center">{handleRenderChairs()}</div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center text-white">
                <div className="w-8 h-8  rounded m-1 bg-lime-500 border-lime-500"></div>
                Đang Chọn
              </div>
              <div className="flex items-center text-white">
                <div className="w-8 h-8 bg-red-900 rounded m-1 border-red-900 flex items-center justify-center"></div>
                Đã Đặt
              </div>
              <div className="flex items-center text-white ">
                <div className="w-8 h-8  rounded m-1 bg-stone-200 border-stone-200"></div>
                Thường
              </div>
              <div className="flex items-center text-white ">
                <div className="w-8 h-8 bg-red-500 border-red-500 rounded m-1"></div>
                Vip(Prime)
              </div>
            </div>
          </div>
          <div className="bg-slate-700 mt-5">
            <div className=" flex px-4 py-5 justify-center text-sm leading-6">
              <div className="flex px-4 ">
                <div className="w-36 h-40 ">
                  <img
                    className="block object-cover"
                    src={showTimes?.thongTinPhim.hinhAnh}
                    alt=""
                  />
                </div>
                <div className="px-4">
                  <div className="text-white">
                    Tên Phim :
                    <span className="">{showTimes?.thongTinPhim.tenPhim}</span>
                  </div>
                  <div className="text-white">
                    Phòng Chiếu :
                    <span className="">{showTimes?.thongTinPhim.tenRap}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white">
                  Suất Chiếu:
                  <span className="">{showTimes?.thongTinPhim.gioChieu}</span>
                </div>
                <div className="text-white">
                  Rạp :
                  <span className="">{showTimes?.thongTinPhim.tenCumRap}</span>
                </div>
              </div>
              <div>
                <div className="text-white">
                  Ghế Đang Chọn :
                  {userBookTicket.map((item) => {
                    return (
                      <span className="text-rose-500 inline-block ">
                        Ghế{item.tenGhe},
                      </span>
                    );
                  })}
                </div>
                <div className="text-white">
                  <span className="">
                    Tổng Tiền :
                    <span className="text-rose-500 inline-block text-lg ">
                      {handleTotalPrice().toLocaleString() + "VND" || "0 VND"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center pb-4">
              <button
                onClick={handlePostListBookItem}
                className="text-red-500 px-6 py-3 rounded bg-slate-200 hover:bg-red-500 hover:text-white ease-in-out duration-300 transition"
              >
                Đặt Vé
              </button>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="pt-10 md:hidden lg:hidden">
          <div className="">
            <div className={` ${styles.trapezoid}`}></div>
            <h2 className="text-red-600 pt-5 font-bold text-xl text-center">
              Màn hình
            </h2>
            <div className="pt-10 text-center">
              {handleRenderChairsMobile()}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-5">
              <div className="flex items-center text-white ml-6">
                <div className="w-6 h-6  rounded m-1 bg-lime-500 border-lime-500"></div>
                Đang chọn
              </div>
              <div className="flex items-center text-white ml-6">
                <div className="w-6 h-6 bg-red-900 rounded m-1 border-red-900 flex items-center justify-center"></div>
                Đã Đặt
              </div>
              <div className="flex items-center text-white  ml-6">
                <div className="w-6 h-6  rounded m-1 bg-stone-200 border-stone-200"></div>
                Thường
              </div>
              <div className="flex items-center text-white ml-6 ">
                <div className="w-6 h-6 bg-red-500 border-red-500 rounded m-1"></div>
                Vip(Prime)
              </div>
            </div>
          </div>
          <div className="bg-slate-700 mt-5">
            <div className=" px-4 py-5 justify-center text-sm leading-6">
              <div className="">
                <div className="text-white">
                  Tên Phim :
                  <span className="">{showTimes?.thongTinPhim.tenPhim}</span>
                </div>
                <div className="text-white">
                  Phòng Chiếu :
                  <span className="">{showTimes?.thongTinPhim.tenRap}</span>
                </div>
              </div>
              <div>
                <div className="text-white">
                  Suất Chiếu:
                  <span className="">{showTimes?.thongTinPhim.gioChieu}</span>
                </div>
                <div className="text-white">
                  Rạp :
                  <span className="">{showTimes?.thongTinPhim.tenCumRap}</span>
                </div>
              </div>
              <div>
                <div className="text-white">
                  Ghế Đang Chọn :
                  {userBookTicket.map((item) => {
                    return (
                      <span className="text-rose-500 inline-block ">
                        Ghế{item.tenGhe},
                      </span>
                    );
                  })}
                </div>
                <div className="text-white">
                  <span className="">
                    Tổng Tiền :
                    <span className="text-rose-500 inline-block ">
                      {handleTotalPrice().toLocaleString() + "VND" || "0 VND"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center pb-4">
              <button
                onClick={handlePostListBookItem}
                className="text-red-500 px-6 py-3 rounded bg-slate-200 hover:bg-red-500 hover:text-white ease-in-out duration-300 transition"
              >
                Đặt Vé
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
