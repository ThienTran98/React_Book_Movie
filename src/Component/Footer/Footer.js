import React from "react";
import { Desktop, Mobile, Tablet } from "./../../HOC/responsive";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import FooterTablet from "./FooterTablet";

export default function Footer() {
  return (
    <div>
      <Desktop>
        <FooterDesktop />
      </Desktop>
      <Tablet>
        <FooterTablet />
      </Tablet>
      <Mobile>
        <FooterMobile />
      </Mobile>
    </div>
  );
}
