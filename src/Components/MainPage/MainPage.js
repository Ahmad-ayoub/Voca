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
        <div className="search-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            className="input-box"
          />
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
      <div className="input_chat_box">
        <div className="group_box">
          <FontAwesomeIcon icon={faUserGroup} className="profile_box_image" />
          <p className="profile_box_text">Group #1</p>
        </div>
        <div className="chat_box"></div>
        <div className="text_box">
          <input className="input_msg_box" placeholder="Type here..." />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
