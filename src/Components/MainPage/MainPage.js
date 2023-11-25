import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faArrowAltCircleRight,
  faEllipsisV,
  faMagnifyingGlass,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  let navigate = useNavigate();

  function goToSettings() {
    navigate("/SettingsPage");
  }

  return (
    <div className="profile_and_group_box">
      <div className="group_chat_list">
        <div className="username_box">
          <FontAwesomeIcon
            icon={faUser}
            className="profile_box_image_mainUser"
          />
          <p className="profile_box_text">User Name</p>
          <button className="settings_button" onClick={goToSettings}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
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
          <input className="input_message_box" placeholder="Type here..." />
          <button className="input_message_button">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
