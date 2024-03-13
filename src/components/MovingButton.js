import React, { useState } from "react";

function MovingButton(handleNoClickParent) {
  const [position, setPosition] = useState({
    x: 102,
    y: 80.7,
  });
  const [topvalue, settopvalue] = useState(`auto`);
  const [leftvalue, setleftvalue] = useState(`auto`);
  const [button_height, setbuttonheight] = useState(10);
  const [button_width, setbuttonwidth] = useState(25);
  const [fontsize, setfontsize] = useState(`5`);

  const handleClick = () => {
    handleNoClickParent.handleNo();
    const buttonWidthInPixels = (window.innerWidth * button_width) / 100;
    const buttonHeightInPixels = (window.innerHeight * button_height) / 100;
    const maxX = window.innerWidth - buttonWidthInPixels;
    const maxY = window.innerHeight - buttonHeightInPixels;

    const newXInPixels = Math.random() * maxX;
    const newYInPixels = Math.random() * maxY;

    const newX = (newXInPixels / window.innerWidth) * 100;
    const newY = (newYInPixels / window.innerHeight) * 100;
    settopvalue(newX.toString() + "vh");
    setleftvalue(newY.toString() + "vh");
    const newHeight = button_height * 0.95;
    const newWidth = button_width * 0.95;
    const newfontsize = fontsize * 0.95;

    setbuttonheight(newHeight);
    setbuttonwidth(newWidth);
    setfontsize(newfontsize);
  };

  return (
    <div>
      {handleNoClickParent.visble && (
        <button
          onClick={handleClick}
          style={{
            position: `fixed`,
            fontSize: `${fontsize}vh`,
            cursor: `pointer`,
            top: `${topvalue}`,
            left: `${leftvalue}`,
            height: `${button_height}vh`,
            width: `${button_width}vh`,
            fontFamily: `cursive`,
          }}
        >
          No
        </button>
      )}
    </div>
  );
}

export default MovingButton;
