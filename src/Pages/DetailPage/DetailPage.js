import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";

export default function DetailPage() {
  const detail = useParams();
  console.log(detail);

  useEffect(() => {
    movieService
      .getDetailMovie(detail.id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [detail.id]);
  return <div>DetailPage</div>;
}
