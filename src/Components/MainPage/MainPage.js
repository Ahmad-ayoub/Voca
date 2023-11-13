import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  return (
    <div className="profile_box">
      <>
        <FontAwesomeIcon icon={faUser} className="profile_box_image" />
        <p className="profile_box_text">Hello World</p>
      </>
    </div>
  );
};

export default MainPage;
