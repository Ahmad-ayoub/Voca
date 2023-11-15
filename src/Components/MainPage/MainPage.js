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
      <div className="group_chat_list">
        <div className="chat_list_box">
          <FontAwesomeIcon icon={faUser} className="profile_box_image" />
          <p className="profile_box_text">User Name</p>
        </div>
        <div className="chat_list_box">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="profile_box_image"
          />
          <input type="text" placeholder="Search" aria-label="Search" />
        </div>
        <div className="chat_list_box">
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">Group #1</p>
        </div>
        <div className="chat_list_box">
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">Group #2</p>
        </div>
        <div className="chat_list_box">
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">Group #3</p>
        </div>
        <div className="chat_list_box">
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">AI Alex</p>
        </div>
      </div>
      <div className="group_box">
        <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
        <p className="profile_box_text">Group #1</p>
      </div>
    </div>
  );
};

export default MainPage;
