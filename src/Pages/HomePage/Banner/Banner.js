import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../../../redux-toolkit/movieSlice";
import { movieService } from "../../../services/movieService";
import { Carousel } from "antd";

const contentStyle = {
  height: "600px",
  width: "100%",
  lineHeight: "600px",
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default function Banner() {
  let dispatch = useDispatch();
  useEffect(() => {
    movieService
      .getBanner()
      .then((res) => {
        dispatch(getBanner(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getListBanner = useSelector((state) => {
    return state.movieSlice.bannerList;
  });

  const handleRenderBanner = () => {
    return getListBanner?.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };
  return <Carousel autoplay>{handleRenderBanner()}</Carousel>;
}
