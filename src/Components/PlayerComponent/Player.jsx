import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import Slider from "@mui/material/Slider";

function Player() {
  return (
    <div className=" w-full h-[74.5px] ">
      <div className="flex justify-center p-3 gap-[15px]">
        <button>
          <ShuffleIcon className="text-white" />
        </button>
        <button>
          <SkipPreviousIcon className="text-white" />
        </button>
        <button className="text-white">
          <PlayCircleIcon style={{ height: "37px", width: "37px" }} />
        </button>
        <button>
          <SkipNextIcon className="text-white" />
        </button>
        <button>
          <RepeatIcon className="text-white" />
        </button>
      </div>
      <div className=" relative bottom-[22px] flex justify-center ">
        <Slider
          style={{ color: "white", width: "32%" }}
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
}

export default Player;
