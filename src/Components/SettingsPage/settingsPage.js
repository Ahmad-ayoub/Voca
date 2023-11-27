import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";

const SettingsPage = () => {
  return (
    <div>
      <nav>
        <div>
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faUser} />
          <p>Username</p>
        </div>
        <button>
          <p>Theme</p>
        </button>
        <button>
          <p>Font</p>
        </button>
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
