import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import styles from "./buyTickets.module.css";

export default function BuyTicketsPage() {
  const [showTimes, setShowTimes] = useState();
  const codeSchedule = useParams();
  useEffect(() => {
    movieService.getListTheaterBookTickets(codeSchedule.id).then((res) => {
      setShowTimes(res.data.content);
      console.log("res.data.content: ", res.data.content);
    });
  }, [codeSchedule.id]);
  const handleRenderChairs = () => {
    return showTimes?.danhSachGhe.map((chair, index) => {
      return (
        <>
          <button key={index} className={`${styles.ghe}`}>
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
          </div>

          <div className="col-span-3 mt-10">
            <div className="bg-white">
              <div className="border-b py-4">Thành Tiền : {}</div>
              <div className="border-b py-4">
                Cụm Rạp : {showTimes?.thongTinPhim.tenCumRap}
              </div>
              <div className="border-b py-4">
                Địa Chỉ : {showTimes?.thongTinPhim.diaChi}
              </div>
              <div className="border-b py-4">
                Ngày Chiếu :
                {moment(showTimes?.thongTinPhim.ngayChieu).format("LL")}
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
