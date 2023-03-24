import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment/moment";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import styles from "./detail.module.css";
import TabsDetail from "./TabsDetail";

export default function DetailPage() {
  const [detailFilm, setDetailFilm] = useState(null);
  const [show, setShow] = useState(false);
  const detail = useParams();

  let handleClickShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    movieService
      .getDetailMovie(detail.id)
      .then((res) => {
        setDetailFilm(res.data.content);
      })
      .catch((err) => {});
  }, [detail.id]);
  return (
    <div className="mt-24 w-full h-full">
      <div className={`${styles.bgDetail} h-full w-full`}>
        <div className="container mx-auto  ">
          <div className="flex text-white lg:px-10 lg:py-16 md:px-10 md:py-16 px-2 py-3">
            <div className="md:w-1/3 lg:w-1/3 mr-3">
              <img
                style={{
                  width: 240,
                  height: 320,
                  objectFit: "cover",
                  borderRadius: 12,
                  alignItems: "flex-end",
                  display: "flex",
                }}
                src={detailFilm?.hinhAnh}
                alt=""
              />
            </div>
            <div className="md:w-1/2 lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-xl">Tên Phim : {detailFilm?.tenPhim}</h2>
              <h3 className="mt-4">
                Ngày Khởi Chiếu :
                {moment(detailFilm?.ngayKhoiChieu).format("LLL")}
              </h3>
              <h3 className="mt-4">
                Đánh giá :
                <FontAwesomeIcon
                  className="ml-0.5 md:ml-2 lg:mdml-2 text-amber-300"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="ml-0.5 md:ml-2 lg:mdml-2 text-amber-300"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="ml-0.5 md:ml-2 lg:mdml-2 text-amber-300"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="ml-0.5 md:ml-2 lg:mdml-2 text-amber-300"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="ml-0.5 md:ml-2 lg:mdml-2 text-amber-300"
                  icon={faStar}
                />
              </h3>
              <h3 className="mt-4 hidden md:block lg:block">
                Giới thiệu : {detailFilm?.moTa}
              </h3>
              <h3 className="mt-4 ">Thời lượng : 120 phút</h3>
              <div className="mt-4">
                <button className="px-3 py-2 bg-red-500 rounded mt-4 mr-4 hover:opacity-70 transition duration-150 ease-in-out">
                  <a href="#muave" className="block ">
                    Mua vé
                  </a>
                </button>
                <button
                  onClick={handleClickShow}
                  className="px-3 py-2 bg-red-500 rounded mt-4  hover:opacity-70 transition duration-150 ease-in-out"
                >
                  Xem trailer
                </button>
              </div>
            </div>
          </div>
        </div>
        <TabsDetail id={detail.id} />
      </div>
      {show ? (
        <div
          onClick={handleClickShow}
          className="bg-black-rgba fixed top-0 left-0 right-0 bottom-0 z-50  flex items-center justify-center"
        >
          <div className="md:w-2/3 md:h-3/5 lg:w-2/3 lg:h-3/5 w-full relative">
            <div
              className="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden"
              style={{ paddingTop: "50%" }}
            >
              <iframe
                className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                src={detailFilm?.trailer}
                allowFullScreen
                data-gtm-yt-inspected-2340190_699="true"
                id={240632615}
              />
            </div>
          </div>
          <div
            onClick={handleClickShow}
            className={`text-2xl ${styles.cancelButton} text-white hover:text-red-500 cursor-pointer hidden lg:block md:block`}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
