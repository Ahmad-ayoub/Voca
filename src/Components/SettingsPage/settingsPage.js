import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";

const SettingsPage = () => {
  return (
    <div className="settingsPage_layout">
      <nav>
        <div>
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faUser} />
          <p>Username</p>
        </div>
        <div>
          <button>
            <p>Theme</p>
          </button>
        </div>
        <div>
          <button>
            <p>Font</p>
          </button>
        </div>
        <div>
          <button>
            <p>Logout</p>
          </button>
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
