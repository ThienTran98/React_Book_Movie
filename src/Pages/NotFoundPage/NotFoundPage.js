import React from "react";
import Lottie from "lottie-react";
import bg_lonely from "../../assets/36395-lonely-404.json";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import styles from "./notFoundPage.module.css";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="mt-24 w-screen h-screen">
      <div className="relative">
        <Lottie animationData={bg_lonely} />
      </div>
      <div className={styles.positionNot}>
        <h1>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
          <p>Please try to</p>
          <div className="mt-5">
            <a
              className="bg-green-400 mr-3 hover:cursor-pointer py-2 px-5 sm:px-3 text-zinc-600 inline-block"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon className="mr-2" icon={faArrowLeft} />
              Go back
            </a>
            <NavLink
              className="bg-green-400  px-5 hover:cursor-pointer py-2 sm:px-3 text-zinc-600 inline-block"
              to="/"
            >
              <FontAwesomeIcon className="mr-2" icon={faHouse} />
              Return to the HomePage
            </NavLink>
          </div>
        </h1>
      </div>
    </div>
  );
}
