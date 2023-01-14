import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function CardItemMobile({ item }) {
  return (
    <div className="overflow-hidden flex justify-center rounded ">
      <Card
        hoverable
        style={{
          width: 300,
          marginTop: 12,
          minHeight: 300,
          objectFit: "cover",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          borderRadius: 8,
        }}
        className="shadow-xl"
        cover={<img alt="example" src={item.hinhAnh} />}
      >
        <Meta
          title={<h2 className="text-center">{item.tenPhim}</h2>}
          description={
            <p className="h-12">
              {item.moTa.length > 60
                ? item.moTa.slice(0, 60) + "..."
                : item.moTa}
            </p>
          }
        />
        <div className="text-center mt-5">
          <NavLink to={`/detail/${item.maPhim}`}>
            <button className="bg-red-500 text-white px-3 py-2 rounded hover:text-red-500 hover:bg-white hover:border-red-600 border-solid  border">
              Xem chi tiết
            </button>
          </NavLink>
        </div>
      </Card>
    </div>
  );
}
