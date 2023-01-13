import React from "react";
import { useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";

export default function Spinner() {
  let isLoading = useSelector((state) => {
    return state.spinnerSlice.isLoading;
  });
  return isLoading ? (
    <div className="fixed bg-white-rgba h-screen w-screen top-0 left-0 z-50 flex items-center justify-center">
      <PropagateLoader size={10} speedMultiplier={1} color="#e33837" />
    </div>
  ) : (
    <></>
  );
}
