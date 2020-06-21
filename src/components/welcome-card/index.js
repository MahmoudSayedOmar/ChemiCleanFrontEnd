import React from "react";

import image from "../../assets/crossworkers.png";

import "./welcome-card.css";

export function WelcomeCard({ history }) {
  const navigateToHome = () => {
    history.push("/home");
  };
  return (
    <div class="welcome-container">
      <center>
        <img src={image} alt="Powered by crossworkers" width="200" />
      </center>
      <div class="welcome-container__text">Welcome to ChemiClean</div>
      <div class="welcome-container__btn">
        <button
          type="button"
          onClick={navigateToHome}
          class="welcome-container__btnColor"
        >
          Start
        </button>
      </div>
    </div>
  );
}
