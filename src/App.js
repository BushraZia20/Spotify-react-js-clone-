import React from "react";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import AlbumTracks from "./Components/GetAlbums/AlbumTracks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tracks" element={<AlbumTracks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
