import React from "react";
import "./Main.css";
import LeftSide from "../LeftComponent/LeftSide";
import RightSide from "../RightComponent/RightSide";
import Player from "../PlayerComponent/Player";

function Main() {
  return (
    <div className="flex flex-wrap bg-black box-border">
      <LeftSide />
      <RightSide />
      <Player />
    </div>
  );
}

export default Main;
