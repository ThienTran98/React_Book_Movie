import React from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";

export default function LayoutDefault({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
