import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1 className="error">Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured. Requested page not found!
            </div>
            <div className="error-actions">
              <Link to="/" className="btn btn-primary btn-lg">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
