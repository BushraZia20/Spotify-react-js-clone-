import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  return (
    <div>
      <header className="flex flex-wrap items-center">
        <div>
          <button className="prev_btn bg-2a2a2a rounded-[15px] h-[30px] w-[30px] mr-[10px] ml-[5px]">
            <ArrowBackIosNewIcon className=" mr-[3px] mb-[1px] " />
          </button>
          <button className=" next_btn bg-2a2a2a rounded-[15px] h-[30px] w-[30px] mr-38rem">
            <ArrowForwardIosIcon className=" ml-[3px] mb-[1px] " />
          </button>

          <button className="bg-2a2a2a rounded-[24px] py-[8px] px-[10px] w-[143px] text-white mr-[10px]">
            Explore Premium
          </button>
          <button className="text-white bg-2a2a2a px-[9px] py-1 rounded-3xl w-[110px] mr-[10px]">
            Install App
          </button>

          <button className="bg-black p-1 rounded-2xl mr-[10px]">
            <NotificationsOutlinedIcon className=" h-[21px] w-[26px] text-white mb-3px " />
          </button>
          <button className=" p-1 bg-black rounded-3xl ">
            <Avatar
              sx={{
                height: "30px",
                width: "30px",
                backgroundColor: "darkgreen",
              }}
            >
              B
            </Avatar>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
