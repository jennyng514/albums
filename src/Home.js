import React from "react";
import "./index.css";
import AlbumList from "./AlbumList";

function Home() {
  return (
    <div>
      <div className="header p-5 text-center bg-dark">
        <h1 className="mb-3" style={{ color: "white" }}>
          2022
        </h1>
        <h4 className="mb-3" style={{ color: "white" }}>
          Top Best-Selling Albums of All Time
        </h4>
      </div>
      <AlbumList />
    </div>
  );
}

export default Home;
