// import React, { useEffect, useState } from "react";
// import LeftSide from "../LeftComponent/LeftSide";
// // import RightSide from "../RightComponent/RightSide";
// import Navbar from "../RightComponent/Navbar";
// import { useParams } from "react-router-dom";
// import { key } from "../Common/key";

// function AlbumTracks() {
//   const apiKey = key;
//   const { albumId } = useParams();
//   const [tracks, setTracks] = useState([]);
//   const [fetchCount, setFetchCount] = useState(0); // initialise a fetch counter
//   // const ids = localStorage.getItem("albumIds");

//   useEffect(() => {
//     const fetchTracks = async () => {
//       const url = `https://spotify23.p.rapidapi.com/album_tracks/?id=${albumId}&offset=0&limit=300`;
//       const options = {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key": `${apiKey}`,
//           "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await fetch(url, options);
//         if (response.ok) {
//           const result = await response.json();
//           console.log(result);
//           setTracks(result.data.album.tracks.items || []);
//           setFetchCount((prevCount) => prevCount + 1);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchTracks();
//   }, []);

//   return (
//     <div className="flex bg-black">
//       <LeftSide />
//       <div className="flex flex-col items-center gap-[20px] bg-121212 my-3 rounded-[8px] w-71.4vw p-3 ">
//         <Navbar />

//         <div className=" w-full border-2 border-green">
//           <p>API Fetch Count: {fetchCount}</p>

//           <ol className="text-white">
//             {tracks.map((track, index) => (
//               <li key={index} className="track-item">
//                 <div className="flex justify-start gap-[30px]">
//                   <p className="flex items-center">{index + 1}.</p>
//                   <div className="">
//                     <h3>{track.track.name}</h3>
//                     <p>{track.track.artists.items[0].profile.name}</p>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AlbumTracks;

import React, { useEffect, useState } from "react";
import LeftSide from "../LeftComponent/LeftSide";
// import RightSide from "../RightComponent/RightSide";
import Navbar from "../RightComponent/Navbar";
import { useParams } from "react-router-dom";
import { key } from "../Common/key";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function AlbumTracks() {
  const apiKey = key;
  const { albumId } = useParams();
  const [albumData, setAlbumData] = useState([]);
  const [albumImage, setAlbumImage] = useState(null);
  const [tracks, setTracks] = useState([]);

  const [fetchCount, setFetchCount] = useState(0); // initialise a fetch counter
  // const ids = localStorage.getItem("albumIds");

  useEffect(() => {
    const fetchGetAlbums = async () => {
      const url = `https://spotify23.p.rapidapi.com/albums/?ids=${albumId}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": `${apiKey}`,
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setAlbumData(result.albums[0] || []);
          const images = result.albums[0].images;
          if (images && images.length > 0) {
            setAlbumImage(images[0].url);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchGetAlbums();
  }, []);

  useEffect(() => {
    const fetchAlbumTracks = async () => {
      const url = `https://spotify23.p.rapidapi.com/album_tracks/?id=${albumId}&offset=0&limit=300`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": `${apiKey}`,
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setTracks(result.data.album.tracks.items || []);
          setFetchCount((prevCount) => prevCount + 1);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbumTracks();
  }, []);

  return (
    <div className="flex bg-black">
      <LeftSide />
      <div className="flex flex-col items-center gap-[20px] bg-121212 my-3 rounded-[8px] w-71.4vw p-3 ">
        <Navbar />

        <div className="flex w-full gap-[20px] text-white">
          <img
            className="h-[235px] rounded-[6px] shadow-5px-4px-11px-black"
            src={albumImage}
            alt=""
          />
          <div className=" flex flex-col justify-end pb-5 ">
            <p className="text-[14px]">{albumData.album_type}</p>
            <h1 className="text-[30px]">{albumData.name}</h1>
            <div className="flex">
              {/* <h6>{albumData.artists.name || null}</h6> */}
              {/* <h6>.{albumData.release_date.split("-")[0]}</h6> */}

              <h6>.{albumData.total_tracks} songs</h6>
            </div>
          </div>
        </div>

        <div className="w-full p-3">
          <button className=" h-[50px] bg-1ed760 w-[50px] rounded-[25px] shadow-2px-2px-5px-black ">
            <PlayArrowIcon style={{ height: "30px", width: "30px" }} />
          </button>
        </div>

        <div className=" w-full">
          <p>API Fetch Count: {fetchCount}</p>

          <ol className="text-white">
            {tracks.map((track, index) => (
              <li key={index} className="track-item">
                <div className=" p-2 flex justify-start gap-[30px]">
                  <p className="flex items-center">{index + 1}.</p>
                  <div className="">
                    <h3>{track.track.name}</h3>
                    <p>{track.track.artists.items[0].profile.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default AlbumTracks;

/**
 * <ol className="text-white">
          {tracks.map((track, index) => (
            <li key={index} className="track-item">
              <div className="flex flex-col">
                {index + 1}. {track.track.name}
                {track.track.artists.items[0].profile.name}
              </div>
            </li>
          ))}
        </ol>
 */
