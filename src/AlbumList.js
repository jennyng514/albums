import React from "react";
import Album from "./Album";
import { useGlobalContext } from "./context";

function AlbumList() {
  const { products } = useGlobalContext();
  return (
    <div className="container">
      <div className="row row-cols-3">
        {products.map((album) => {
          return <Album key={album.id} {...album} />;
        })}
      </div>
    </div>
  );
}

export default AlbumList;
