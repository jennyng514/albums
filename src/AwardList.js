import React, { useState, useEffect } from "react";
import Award from "./Award";
import { useGlobalContext } from "./context";

function AwardList() {
  const { awds } = useGlobalContext();
  const [awards, setAwards] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    let newAwards = [...awds];
    if (searchInput.length > 0) {
      newAwards = newAwards.filter((awd) => {
        return awd.search.find((element) =>
          element.toUpperCase().match(searchInput.toUpperCase())
        );
      });
    }
    setAwards(newAwards);
  }, [searchInput, awds]);
  return (
    <div className="container">
      <div className="p-5 text-center bg-white">
        <h1 className="mb-3" style={{ color: "black" }}>
          All Awards
        </h1>
        <div class="row justify-content-center">
          <input
            className="form-control form-control-sm ml-3  w-25"
            type="search"
            placeholder="Search"
            onChange={handleChange}
            value={searchInput}
          />
        </div>
      </div>
      <div
        className="row row-cols-4 justify-content-center"
        style={{ marginLeft: 100, marginRight: 100 }}
      >
        {awards.map((awd) => {
          return <Award key={awd.id} {...awd} />;
        })}
      </div>
    </div>
  );
}

export default AwardList;
