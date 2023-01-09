import React from "react";
import { Desktop, Mobile, Tablet } from "./../../HOC/responsive";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import HeaderTablet from "./HeaderTablet";

export default function Header() {
  return (
    <div>
      <Desktop>
        <HeaderDesktop />
      </Desktop>
      <Tablet>
        <HeaderTablet />
      </Tablet>
      <Mobile>
        <HeaderMobile />
      </Mobile>
    </div>
  );
}
