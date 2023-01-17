import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setUserBookTickets } from "../../redux-toolkit/userSlice";
import { movieService } from "../../services/movieService";
import styles from "./buyTickets.module.css";
import "./buyTickets.css";
import { message } from "antd";

export default function BuyTicketsPage() {
  const [showTimes, setShowTimes] = useState(null);
  const [bookTicket, setBookTicket] = useState({
    maLichChieu: 0,
    danhSachVe: [],
  });
  // thông tin user đặt vé
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
    setBookTicket({
      maLichChieu: codeSchedule.id,
      danhSachVe: userBookTicket,
    });
  }, [codeSchedule.id]);
  const handleTotalPrice = () => {
    return userBookTicket.reduce((acc, cur) => {
      return acc + cur.giaVe;
    }, 0);
  };
  const handlePostListBookItem = () => {
    movieService.postTicketManagement(bookTicket).then((res) => {
      message.success(res.data.content);
    });

    setTimeout(() => {
      movieService.getListTheaterBookTickets(codeSchedule.id).then((res) => {
        setShowTimes(res.data.content);
      });
    }, 1000);
  };
  const handleRenderChairs = () => {
    return showTimes?.danhSachGhe.map((chair, index) => {
      let classGheVip = chair.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = chair.daDat === true ? "gheDaDat iconCanCel" : "";
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
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
          >
            {chair.tenGhe}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </>
      );
    });
  };
  return (
    <div className={`mt-24 ${styles.bgMovie}`}>
      <div className="px-10 container pb-20">
        <div className="lg:grid grid-cols-12 gap-4 hidden">
          <div className="col-span-9 mt-10 mx-auto">
            <div className={` ${styles.trapezoid}`}></div>
            <h2 className="text-red-600 pt-5 font-bold text-xl text-center">
              Màn hình
            </h2>
            <div className="">{handleRenderChairs()}</div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center text-white">
                <div className="w-8 h-8  rounded m-1 bg-lime-500 border-lime-500"></div>
                Đang chọn
              </div>
              <div className="flex items-center text-white">
                <div className="w-8 h-8 bg-red-900 rounded m-1 border-red-900 flex items-center justify-center"></div>
                Đã chọn
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
      </div>
    </div>
  );
}
