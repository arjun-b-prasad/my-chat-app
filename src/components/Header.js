import React from "react";
import Logo from "../asset/messenger-logo.png";
import Signout from "../asset/logout-btn.png";
import HuhSFX from "../asset/Huh_SFX.mp3";
import "./Header.css";

const Header = ({ auth, user }) => {
  const audio = new Audio(HuhSFX);
  const playSound = () => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <header>
      <div className="logo-title-container">
        <div className="logo-container">
          <img
            src={Logo}
            alt=""
            height={"40px"}
            width={"40px"}
            onClick={playSound}
          />
        </div>
        <div className="title-container">
          <h1>Discord Messenger</h1>
        </div>
      </div>
      {user && (
        <div className="signout-container">
          <img
            src={Signout}
            alt=""
            height={"40px"}
            width={"40px"}
            onClick={() => {
              auth.signOut();
            }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
