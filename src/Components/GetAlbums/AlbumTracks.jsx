import React, { useEffect, useState } from "react";
import LeftSide from "../LeftComponent/LeftSide";
// import RightSide from "../RightComponent/RightSide";
import Navbar from "../RightComponent/Navbar";
import { json } from "react-router-dom";

function AlbumTracks() {
  const [tracks, setTracks] = useState([]);
  const ids = localStorage.getItem("albumIds");

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://spotify23.p.rapidapi.com/album_tracks/?id=1rVhockt4RAiZFaK3M3zPB&offset=0&limit=300";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "386b5550f1msh5f9333da9683b9cp125a70jsna2e656067c5b",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const result = await response.json();
          console.log(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  });

  return (
    <div className="flex bg-black">
      <LeftSide />
      <div className="flex flex-col items-center gap-[20px] bg-121212 my-3 rounded-[8px] w-71.4vw p-3 ">
        <Navbar />

        <div className=" h-12rem w-98% border-2 border-green p-3 flex ">
          <div className=" h-[164px] w-[164px] bg-green">
            <img className=" h-full w-full bg-green" src="" alt="" />
          </div>
          <div>
            <p className="text-white">Playlist</p>
            <h1 className="text-white">No Jacket Required</h1>
            <p className="text-white">phil collins</p>
          </div>
        </div>

        <div className="h-20 w-full border-2 border-green"></div>
      </div>
    </div>
  );
}

export default AlbumTracks;
