import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faArrowLeft,
  faFont,
  faPalette,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SettingsPage = () => {
  let navigate = useNavigate();

  function goToMain() {
    navigate("/MainPage");
  }

  function goToAuthPage() {
    navigate("/");
  }

  const [hoverCount, setHoverCount] = useState(0);

  const onMouseEnter = () => {
    setHoverCount((prevCount) => prevCount + 1);
  };

  const onMouseLeave = () => {
    setHoverCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const isHovered = hoverCount > 0;

  return (
    <div className="settingsPage_layout">
      <main className="mainColor">
        <div className="backbutton_usernamebox">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            onClick={goToMain}
            className="backbutton"
          />
          <FontAwesomeIcon icon={faUser} size="2x" />
          <p className="font_style">Username</p>
        </div>
        <div className="button_layout">
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="button_layout_one"
          >
            <button className="button_shape">
              <FontAwesomeIcon icon={faPalette} size="2x" />
              <p className="btntext_format">Theme</p>
            </button>
          </div>
          <div className="button_layout_two">
            <button className="button_shape">
              <FontAwesomeIcon
                icon={faFont}
                size="2x"
                className="fonticon_format"
              />
              <p className="btntext_format">Font</p>
            </button>
          </div>
          <div className="chat_list_box logout_button_box ">
            <button className="logout_button" onClick={goToAuthPage}>
              <p className="logout_text">Log Out</p>
            </button>
          </div>
        </div>
      </main>
      <section className="sectionColor">
        <section>
          {isHovered && (
            <div
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="themeSelection"
            >
              <p className="mainThemeLayout">Main Theme</p>
              <p className="themetwolayout">Theme 2</p>
              <p>Theme 3</p>
            </div>
          )}
        </section>
        <section className="user_credentials">
          <FontAwesomeIcon icon={faUser} size="2x" />
          <h2>Name</h2>
          <h2>email</h2>
          <h2>username</h2>
          <button className="button_edit">Edit</button>
        </section>
      </section>
    </div>
  );
};

export default SettingsPage;
