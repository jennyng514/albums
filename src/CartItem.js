import React from "react";
import { useGlobalContext } from "./context";

function CartItem({ id, url, title, year, price, count }) {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <div className="cart-card">
      <div className="card-body">
        <img src={url} alt={title} className="card-img" />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <small className="text-muted">{year}</small>
          <small className="text-muted" style={{ float: "right" }}>
            ${price}
          </small>
        </p>
        <div className="text-center">
          <div className="col-12 ">
            <button className="amt-btn" onClick={() => decrease(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-dash-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
              </svg>
            </button>
            {count}
            <button className="amt-btn" onClick={() => increase(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-plus-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
          </div>
          <button className="remove-btn" onClick={() => remove(id)}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
