import React from "react";
// import "./LeftSide.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Library from "../../Assets/library.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ListIcon from "@mui/icons-material/List";

function LeftSide() {
  return (
    <div className="whole-left p-3 h-screen w-28 flex flex-col justify-start gap-3 bg-black text-white">
      <div className="upper-left rounded-[10px] flex flex-col justify-center gap-[6px] bg-121212">
        <div className="home flex m-[10px]">
          {/* <img src="" alt="" /> */}
          <HomeIcon className="mr-[15px]" />
          <h3>Home</h3>
        </div>

        <div className="search flex m-[10px]">
          <SearchIcon className="mr-[15px]" />
          <h3>Search</h3>
        </div>
      </div>

      {/* L O W E R - L E F T */}

      <div className="lower-left rounded-[10px] bg-121212">
        <header className="library-div flex m-[10px] my-[20px]">
          <div className="library-icons flex items-center mr-[195px] ">
            <img src={Library} alt=".." className="w-[22px] h-auto mr-2" />
            <h3>Your Library</h3>
          </div>
          <div className="add-arrow flex items-center">
            <SearchIcon className="mr-[20px]" />
            <ArrowForwardIcon />
          </div>
        </header>

        <div className="lower-left-btns mx-[10px] my-[20px] ">
          <button className="bg-2a2a2a mr-[15px] border-none w-24 text-[16px] py-[4px] px-[9px] rounded-2xl">
            Playlists
          </button>
          <button className="bg-2a2a2a mr-[15px] border-none w-24 text-[16px] py-[4px] px-[9px] rounded-2xl ">
            Album
          </button>
        </div>

        <div className="recent_playlist_div flex m-[10px] ">
          <SearchIcon className="mr-[268px]" />
          <p className="mr-[5px]">Recents</p>
          <ListIcon className=" mt-[2px] " />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
