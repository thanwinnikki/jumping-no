import React, { useState } from "react";
import "./homepage.css";
import MovingButton from "../components/MovingButton.js";
import NikkiSmile from "../assets/nikki-smile.jpg";
import AnnaNoSmile from "../assets/anna-nosmile.jpg";
import Together from "../assets/together.jpg";
import Yay from "../assets/yay.png";

function Homepage() {
  const [imgSrc, setimgSrc] = useState(NikkiSmile);
  const [topMsg, setTopMsg] = useState(
    "Will you be my girlfriend? Don't Press No."
  );
  const [noButtonVisible, setNoButtonVisible] = useState(true);
  const changeMindResponses = [
    "Could you reconsider your stance on this?",
    "Would you be open to a different perspective?",
    "Is there room for flexibility in your viewpoint?",
    "Could you take another look at this?",
    "Would you be willing to rethink your position?",
    "Can we discuss this further to explore alternative options?",
    "Have you considered the implications from a different angle?",
    "Would you be open to adjusting your opinion?",
    "Could you keep an open mind about this?",
    "Can we revisit this topic with fresh eyes?",
  ];
  const [noCounter, setnoCounter] = useState(0);

  const handleNoClick = () => {
    console.log("you have pressed no");
    setimgSrc(AnnaNoSmile);
    const randomIndex = Math.floor(Math.random() * changeMindResponses.length);
    setnoCounter(noCounter + 1);
    setTopMsg(changeMindResponses[randomIndex] + " No Counter: " + noCounter);
  };

  const handleYesClick = () => {
    setimgSrc(Together);
    setNoButtonVisible(false);
    setTopMsg("Congratulations! We are now Boyfriend and Girlfriend");
    console.log("you have pressed yes");
  };

  return (
    <>
      <div className="container">
        {!noButtonVisible && (
          <img
            src={Yay}
            style={{ height: `20vh`, width: `20vh`, paddingRight: `5vh` }}
            alt="Changing Pic"
          />
        )}
        <div className="centre-container">
          <h1>{topMsg}</h1>
          <img src={imgSrc} alt="Changing Pic" />
          <div className="buttonContainer">
            {noButtonVisible && (
              <button className="yes-button" onClick={handleYesClick}>
                Yes
              </button>
            )}
            <MovingButton handleNo={handleNoClick} visble={noButtonVisible} />
          </div>
          {!noButtonVisible && <h1>I love you to the moon!</h1>}
        </div>
        {!noButtonVisible && (
          <img
            src={Yay}
            style={{ height: `20vh`, width: `20vh`, paddingLeft: `5vh` }}
            alt="Changing Pic"
          />
        )}
      </div>
    </>
  );
}

export default Homepage;
