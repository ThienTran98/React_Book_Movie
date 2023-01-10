import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function CardItem(props) {
  const { hinhAnh, tenPhim, moTa, maPhim } = props.item;

  return (
    <Card
      hoverable
      style={{
        textAlign: "justify",
      }}
      className="mx-auto lg:w-64 md:w-56 shadow-2xl text-center mt-4"
      cover={<img alt="example" className="h-60 object-cover" src={hinhAnh} />}
    >
      <Meta
        title={<h2 className="text-center">{tenPhim}</h2>}
        description={
          <p className="h-12">
            {moTa.length > 60 ? moTa.slice(0, 60) + "..." : moTa}
          </p>
        }
      />
      <div className="text-center mt-5">
        <NavLink to={`/buy-tickets/${maPhim}`}>
          <button className="bg-red-500 text-white px-3 py-2 rounded mr-2 hover:text-red-500 hover:bg-white">
            Đặt vé
          </button>
        </NavLink>
        <NavLink to={`/detail/${maPhim}`}>
          <button className="bg-red-500 text-white px-3 py-2 rounded hover:text-red-500 hover:bg-white">
            Xem chi tiết
          </button>
        </NavLink>
      </div>
    </Card>
  );
}
