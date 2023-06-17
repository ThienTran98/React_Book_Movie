import React, { useEffect, useState } from "react";
import { movieService } from "../../../services/movieService";
import CardItem from "./CardItem";
import { getPagination } from "../../../redux-toolkit/movieSlice";
import { Pagination } from "antd";

export default function ListMovie() {
  const [listMovie, setListMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    movieService.getListMovie(currentPage).then((res) => {
      setListMovie(res.data.content);
    });
  }, [currentPage]);

  const onChange = (page) => {
    setCurrentPage(page);
  };
  const handlerRenderListCard = () => {
    return listMovie?.items.map((item, index) => {
      return <CardItem key={index} item={item} />;
    });
  };
  return (
    <div className="container mx-auto py-6 ">
      <div className="flex-col justify-between flex-wrap">
        <div className="lg:grid-cols-5 md:grid-cols-3 lg:grid md:grid gap-3 px-4 md:px-0 lg:px-5 py-3 ">
          {handlerRenderListCard()}
        </div>
        <div className="flex justify-center mt-6">
          <Pagination
            onChange={onChange}
            current={currentPage}
            total={listMovie?.totalCount}
          />
        </div>
      </div>
    </div>
  );
}
