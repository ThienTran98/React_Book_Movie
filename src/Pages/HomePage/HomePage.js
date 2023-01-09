import React from "react";
import Banner from "./Banner/Banner";
import ListMovie from "./ListMovie/ListMovie";
import SeeMore from "./SeeMore/SeeMore";
import Tabs from "./Tabs/TabsMovie";

export default function HomePage() {
  return (
    <div className="pt-24">
      <Banner />
      <ListMovie />

      <div>
        <Tabs />
      </div>
      <div>
        <SeeMore />
      </div>
    </div>
  );
}
