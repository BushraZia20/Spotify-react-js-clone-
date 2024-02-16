import React, { useEffect, useState } from "react";
import AlbumTracks from "./AlbumTracks";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function GetAlbums() {
  const [albums, setAlbums] = useState([]);
  const [storedId, setStoredId] = useState([]);
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c057f92dffmshfc414d075461764p15c67ejsn3ec569e044c9",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setAlbums(result.albums.items || []);

          // console.log(typeof parts);
          const uri = result.albums.items.map((album) => {
            const parts = album.data.uri.split(":");
            const albumId = parts[2];
            console.log(albumId);
            // console.log(typeof parts);
          });

          // localStorage.setItem("albumIds", JSON.stringify(albumId));

          // setStoredId(albumId);
          // console.log("storedId", storedId);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="albums h-75vh shadow-lg w-67rem p-2 overflow-y-scroll ">
      <div className="grid grid-cols-5 gap-[27px]">
        {albums.map((album, index) => (
          <Link
            to="/tracks"
            key={index}
            className="albums_card h-[266px] w-[188px] bg-181818 p-3 / rounded-[10px]"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="h-[145px] w-[161px]">
              <img
                className="h-full w-full rounded-[6px]"
                src={album.data.coverArt.sources[0].url}
                alt=""
              />
            </div>

            <div className="h-[41px] w-[41px] relative bottom-[50px] left-[110px]">
              {isHovered === index && (
                <button className="bg-1ed760 relative h-[41px] w-[41px] rounded-full shadow-181818 shadow-xl">
                  <PlayArrowIcon />
                </button>
              )}
            </div>

            <h3 className="pb-2 text-white font-semibold relative bottom-[35px] text-[16px]">
              {album.data.name}
            </h3>
            <p className=" text-white relative bottom-[40px] text-[12px] ">
              {album.data.artists.items[0].profile.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GetAlbums;

/*
             <div
              className="bg-green relative left-[114px] bottom-[47px] h-[41px] w-[41px] rounded-full "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered && (
                <button className="bg-green relative left-[114px] bottom-[47px] h-[41px] w-[41px] rounded-full invisible hover:visible">
                  <PlayArrowIcon />
                </button>
              )}
            </div> 
*/
