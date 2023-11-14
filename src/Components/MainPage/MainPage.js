import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  return (
    <div className="profile_and_group_box">
      <div className="profile_box">
        <>
          <FontAwesomeIcon icon={faUser} className="profile_box_image" />
          <p className="profile_box_text">User Name</p>
        </>
      </div>
      <div className="group_box">
        <>
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">Group #1</p>
        </>
      </div>
      <div className="group_chat_list">
        <>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="profile_box_image"
          />
          <input type="text" placeholder="Search" aria-label="Search" />
        </>
        <>
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">Group #1</p>
        </>
        <>
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">Group #2</p>
        </>
        <>
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">Group #3</p>
        </>
        <>
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">AI Alex</p>
        </>
      </div>
    </div>
  );
};

export default MainPage;
