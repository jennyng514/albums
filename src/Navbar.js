import React from "react";
import { Link } from "react-router-dom";
import { albumInfo } from "./data/albumInfo";
import { useGlobalContext } from "./context";

function Navbar() {
  const { amount } = useGlobalContext();
  const outputHTML = () => {
    if (amount) {
      return <p className="total-amount">{amount}</p>;
    } else {
      return null;
    }
  };
  return (
    <nav className="navbar fixed-top navbar-expand navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-vinyl"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
          <path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Albums
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {albumInfo.map((album) => {
                return (
                  <Link
                    key={album.id}
                    to={`/album/${album.title}`}
                    className="dropdown-item"
                  >
                    {album.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <Link to="/awards" className="nav-item nav-link active">
            Awards
          </Link>
        </div>
      </div>
      <Link to="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-cart-fill navbar-brand navbar-right pt-2"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </Link>
      <div className="amount-container">{outputHTML()}</div>
    </nav>
  );
}

export default Navbar;
