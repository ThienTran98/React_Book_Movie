import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";

export default function BuyTicketsPage() {
  const [showTimes, setShowTimes] = useState();
  const codeSchedule = useParams();

  useEffect(() => {
    movieService.getListTheaterBookTickets(codeSchedule.id).then((res) => {
      console.log(res);
    });
  }, [codeSchedule.id]);
  return <div>BuyTicketsPage</div>;
}
