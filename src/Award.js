import React from "react";

function Award({ album, artist, award, year }) {
  return (
    <div className="col">
      <div className="card mb-3 " style={{ margin: 10 }}>
        <div className="card-body">
          <div className="click-to-top">
            <h5 className="card-title">{award}</h5>
            <h6>{artist}</h6>
            <p className="card-text">
              <small className="text-muted">{year}</small>
            </p>
            <span>{album}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;
