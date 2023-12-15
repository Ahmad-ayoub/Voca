import React, { useState, useEffect } from "react";
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

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isListHovered, setIsListHovered] = useState(false);
  const [delayedHide, setDelayedHide] = useState(false);

  // Combined state to determine if the theme list should be visible
  const showThemeList = isButtonHovered || isListHovered || delayedHide;

  useEffect(() => {
    let timeout;
    if (isButtonHovered) {
      setDelayedHide(true);
    } else {
      // Set a delay before hiding the theme list
      timeout = setTimeout(() => setDelayedHide(false), 300); // 300 milliseconds delay
    }

    return () => clearTimeout(timeout); // Clear timeout on cleanup
  }, [isButtonHovered]);

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
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
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
          {showThemeList && (
            <div
              onMouseEnter={() => setIsListHovered(true)}
              onMouseLeave={() => setIsListHovered(false)}
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
