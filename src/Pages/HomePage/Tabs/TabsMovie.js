import React, { useEffect, useState } from "react";
import { movieService } from "../../../services/movieService";
import { Tabs } from "antd";
import moment from "moment/moment";
import { NavLink } from "react-router-dom";

const onChange = (key) => {};

export default function TabsMovie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    movieService
      .getInforToTheater()
      .then((res) => {
        setData(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderListLogoTheater = () => {
    return data.map((logo, index) => {
      return {
        label: <img src={logo.logo} width="60" alt="" />,
        key: index,
        children: (
          <Tabs
            style={{
              height: 700,
            }}
            tabPosition="left"
            defaultActiveKey="1"
            onChange={onChange}
            items={renderListTheater(logo)}
          />
        ),
      };
    });
  };
  const renderListTheater = (logo) => {
    return logo.lstCumRap.map((theater, index) => {
      return {
        label: <h3>{theater.tenCumRap}</h3>,
        key: index,
        children: (
          <div style={{ overflowY: "scroll", height: 700 }}>
            {renderDetailTheaterTime(theater)}
          </div>
        ),
      };
    });
  };
  const renderDetailTheaterTime = (theater) => {
    return theater.danhSachPhim.map((item, index) => {
      return (
        <div key={index} className="py-3 flex items-center">
          <div>
            <img
              src={item.hinhAnh}
              style={{ width: 86, height: 126, objectFit: "cover" }}
              className="shadow-xl"
              alt=""
            />
          </div>
          <div className="px-4">
            <div className="flex text-lg">
              <span className="px-2 p1-2 bg-red-500 text-white mr-4">C18</span>
              <h3 className="text-red-500">{item.tenPhim}</h3>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {renderListScheduleTimeMovie(item)}
            </div>
          </div>
        </div>
      );
    });
  };
  const renderListScheduleTimeMovie = (item) => {
    return item.lstLichChieuTheoPhim.slice(0, 6).map((detail, index) => {
      return (
        <NavLink
          key={index}
          to="/buy-ticket/:id"
          className="bg-slate-200 text-green-500 py-2 min-w-11rem text-center hover:bg-red-500 hover:text-white"
        >
          <div>{moment(detail.ngayChieuGioChieu).format("LLL")}</div>
        </NavLink>
      );
    });
  };
  return (
    <div className="px-10">
      <div className="shadow-xl">
        <Tabs
          style={{
            height: 700,
          }}
          tabPosition="left"
          defaultActiveKey="1"
          onChange={onChange}
          items={renderListLogoTheater()}
        />
      </div>
    </div>
  );
}
