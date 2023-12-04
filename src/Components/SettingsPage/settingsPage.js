import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";

const SettingsPage = () => {
  return (
    <div className="settingsPage_layout">
      <nav>
        <div className="backbutton_usernamebox">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          <FontAwesomeIcon icon={faUser} size="2x" />
          <p className="font_style">Username</p>
        </div>
        <div className="button_layout">
          <div className="button_layout_one">
            <button className="button_shape">
              <p className="btntext_format">Theme</p>
            </button>
          </div>
          <div className="button_layout_two">
            <button className="button_shape">
              <p className="btntext_format">Font</p>
            </button>
          </div>
          <div className="button_layout_three">
            <button className="button_shape">
              <p className="btntext_format">Logout</p>
            </button>
          </div>
        </div>
      </nav>
      <div>
        <FontAwesomeIcon icon={faUser} />
        <h2>Name</h2>
        <h2>email</h2>
        <h2>username</h2>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default SettingsPage;
