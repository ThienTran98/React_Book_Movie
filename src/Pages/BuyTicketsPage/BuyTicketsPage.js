import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setUserBookTickets } from "../../redux-toolkit/userSlice";
import { movieService } from "../../services/movieService";
import styles from "./buyTickets.module.css";
import "./buyTickets.css";

export default function BuyTicketsPage() {
  const [showTimes, setShowTimes] = useState(null);
  const codeSchedule = useParams();
  const dispatch = useDispatch();
  const userBookTicket = useSelector((state) => {
    return state.userSlice.userBookTickets;
  });
  useEffect(() => {
    movieService.getListTheaterBookTickets(codeSchedule.id).then((res) => {
      setShowTimes(res.data.content);
    });
  }, [codeSchedule.id]);
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
              dispatch(setUserBookTickets(chair));
            }}
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
      <div className="px-10 container">
        <div className="grid grid-cols-12 gap-4 ">
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
                <div className="w-8 h-8 bg-red-900 rounded m-1 border-red-900 flex items-center justify-center">
                  <FontAwesomeIcon className="text-2xl" icon={faXmark} />
                </div>
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

          <div className="col-span-3 mt-10">
            <div className="bg-white">
              <div className="border-b py-4">Thành Tiền : 0</div>
              <div className="border-b py-4">
                Cụm Rạp : {showTimes?.thongTinPhim.tenCumRap}
              </div>
              <div className="border-b py-4">
                Địa Chỉ : {showTimes?.thongTinPhim.diaChi}
              </div>
              <div className="border-b py-4">
                Ngày Chiếu :{showTimes?.thongTinPhim.ngayChieu}
              </div>
              <div className="border-b py-4">
                {showTimes?.thongTinPhim.tenPhim}
              </div>
              <div className="border-b py-4">
                Rạp :{showTimes?.thongTinPhim.tenRap}
              </div>
              <div className="border-b py-4">
                Suất Chiếu : {showTimes?.thongTinPhim.gioChieu}
              </div>
              <div className="border-b py-4">
                Suất Chiếu : {showTimes?.thongTinPhim.gioChieu}
              </div>

              <div className=" border-b py-4 text-2xl text-red-500 border-solid bg-slate-50 hover:bg-red-500 hover:text-white block ">
                Đặt Vé
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
