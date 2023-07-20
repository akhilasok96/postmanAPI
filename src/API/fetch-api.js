import React, { useEffect, useState } from "react";
import "./apiCSS.css";

function FetchApi() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const apiGet = () => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className="apiClass">
      <h1>Harry Potter Characters</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a character"
      />
      <div className="pageCards">
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((character) => {
            return (
              <div className="cards">
                <img
                  src={
                    character.image.length <= 0
                      ? "https://via.placeholder.com/150"
                      : character.image
                  }
                  alt={character.name}
                />
                <h3>{character.name}</h3>
                <p>{character.house}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FetchApi;
