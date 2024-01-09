import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faArrowLeft,
  faFont,
  faPalette,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { themeClasses } from "../ThemeChange/ThemeClasses";
import useTheme from "../ThemeChange/UseTheme";
import { ThemeContext } from "../ThemeChange/UseTheme";
import { FontClasses } from "../FontChange/FontClasses";
import FontContext, { useFont } from "../FontChange/FontChange";

const SettingsPage = () => {
  let navigate = useNavigate();

  function goToMain() {
    navigate("/MainPage");
  }

  function goToAuthPage() {
    navigate("/");
  }

  const [isThemeHovered, setIsThemeHovered] = useState(false);
  const [isFontHovered, setIsFontHovered] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { changeTheme } = useTheme();
  const currentThemeClasses =
    themeClasses[theme] || themeClasses["defaultTheme"];
  const { fontsize } = useContext(FontContext);
  const { setFontSize } = useFont();
  const currentFontClasses =
    FontClasses[fontsize] || FontClasses["fontDefault"];

  return (
    <div className={`settingsPage_layout ${currentFontClasses}`}>
      <main className={`${currentThemeClasses.mainColor}`}>
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
            onMouseEnter={() => setIsThemeHovered(true)}
            onMouseLeave={() => setIsThemeHovered(false)}
            className="button_layout_one"
          >
            <button className="button_shape">
              <FontAwesomeIcon icon={faPalette} size="2x" />
              <p className="btntext_format">Theme</p>
            </button>
          </div>
          <div
            onMouseEnter={() => setIsFontHovered(true)}
            onMouseLeave={() => setIsFontHovered(false)}
            className="button_layout_two"
          >
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
      <section className={`${currentThemeClasses.secondaryColor}`}>
        {isThemeHovered && (
          <div
            onMouseEnter={() => setIsThemeHovered(true)}
            onMouseLeave={() => setIsThemeHovered(false)}
            className="themeSelection"
          >
            <button
              className="themeonelayout"
              onClick={() => changeTheme("defaultTheme")}
            >
              Main Theme
            </button>
            <button
              className="themetwolayout"
              onClick={() => changeTheme("secondaryTheme")}
            >
              Theme 2
            </button>
            <button
              className="themethreelayout"
              onClick={() => changeTheme("thirdTheme")}
            >
              Theme 3
            </button>
          </div>
        )}
        {isFontHovered && (
          <div
            onMouseEnter={() => setIsFontHovered(true)}
            onMouseLeave={() => setIsFontHovered(false)}
            className="fontSelection"
          >
            <button
              className="fontonelayout"
              onClick={() => setFontSize("small")}
            >
              Small
            </button>
            <button
              className="fonttwolayout"
              onClick={() => setFontSize("default")}
            >
              Default
            </button>
            <button
              className="fontthreelayout"
              onClick={() => setFontSize("large")}
            >
              Large
            </button>
          </div>
        )}
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
