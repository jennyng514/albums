import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

function Cart() {
  const { total, cart, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                className="bi bi-cart-x"
                viewBox="0 0 16 16"
              >
                <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <h1 className="error">Oops!</h1>
              <h2>Your cart is empty!</h2>
              <div className="error-details">
                Looks like you haven't added anything to your cart yet
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="p-5 text-center bg-white">
        <h1 className="mb-3" style={{ color: "black" }}>
          Your Cart
        </h1>
      </div>
      <div className="row row-cols-5">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className="text-center">
        <div className="col-12">
          <button type="button" className="btn btn-dark" onClick={clearCart}>
            <b> Clear </b>
          </button>
        </div>
      </div>
      <div className="text-center price">
        <h4>Total: ${total}</h4>
      </div>
    </div>
  );
}

export default Cart;
