import React, { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
const onChange = (key) => {};

export default function TabsDetail(props) {
  console.log(props.id);
  const [theaterDetail, setThearterDetail] = useState(null);
  useEffect(() => {
    movieService
      .getDetailInforFilmAndTheater(props.id)
      .then((res) => {
        setThearterDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);
  const handleRenderLogoTheater = () => {
    return theaterDetail?.heThongRapChieu.map((item, index) => {
      return {
        key: index,
        label: <img src={item.logo} alt="" className="w-14" />,
        children: <div>{handleTimeAndAdress(item)}</div>,
      };
    });
  };
  const handleTimeAndAdress = (item) => {
    return item.cumRapChieu.map((cumRap, index) => {
      return (
        <div key={index} className="">
          <h2 className="text-red-500 font-semibold">{cumRap.tenCumRap}</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-4">
            {cumRap.lichChieuPhim.slice(0, 6).map((item, index) => {
              return (
                <NavLink
                  to="/buy-tickets/:id"
                  className="hover:text-white transition duration-150 ease-in-out"
                >
                  <div
                    key={index}
                    className="px-1 py-2 text-center bg-slate-300 hover:bg-red-500 transition duration-150 ease-in-out"
                  >
                    {moment(item.ngayChieuGioChieu).format("LLL")}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="md:px-10 md:pb-10 lg:px-10 lg:pb-10">
      <div id="muave" className="bg-slate-50 shadow-md px-5 py-10">
        <Tabs
          defaultActiveKey="1"
          items={handleRenderLogoTheater()}
          tabPosition="left"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
