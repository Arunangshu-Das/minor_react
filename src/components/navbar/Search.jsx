import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import Searchresult from"./Searchresult";

function Search() {
  const [name, setName] = useState([]);
  const navigate = useNavigate();

  const fetchData = (e) => {
    navigate('/searchresult', { state: { name: name } });
    // <Searchresult name={name}/>
  };


  return (
    <div className="wrapper">
      <div className="container">
        <input
          type="text"
          className="input"
          placeholder="Search For Your Medicines!"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button value="search" className="close-btn" onClick={fetchData}>Search</button>
      </div>
    </div>
  );
}

export default Search;
