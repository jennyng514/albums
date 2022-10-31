import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

function Album({ id, url, artist, title, year, price, inCart }) {
  const { addToCart } = useGlobalContext();
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <Link to={`/album/${title}`}>
            <img src={url} alt={title} className="card-img" />
          </Link>
          <h5 className="card-title">{title}</h5>
          <h6>{artist}</h6>
          <p className="card-text">
            <small className="text-muted">{year}</small>
            <small className="text-muted" style={{ float: "right" }}>
              ${price}
            </small>
          </p>
        </div>
      </div>
      <div className="text-center">
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
  );
}

export default Album;
