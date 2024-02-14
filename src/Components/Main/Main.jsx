import React from "react";
import "./Main.css";
import LeftSide from "../LeftComponent/LeftSide";
import RightSide from "../RightComponent/RightSide";

function Main() {
  return (
    <div className="main-page bg-black">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Main;
