import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./context";

function AlbumPage() {
  const { products, addToCart } = useGlobalContext();
  const { title } = useParams();
  const album = products.find((album) => album.title === title);
  const { url, desc, inCart, id, price, sales } = album;
  return (
    <div className="container">
      <div className="album-container">
        <img src={url} alt={title} className="album-img" />
        <div className="album-desc">
          <h1>{title}</h1>
          <h3>CERTIFIED SALES: {sales} MILLION</h3>
          <h5>${price}</h5>
          <p>{desc}</p>
          <div className="col-12">
            <button
              type="button"
              className="btn btn-dark btn-sm"
              disabled={inCart}
              onClick={() => addToCart(id)}
            >
              <b> Add to Cart </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AlbumPage;
