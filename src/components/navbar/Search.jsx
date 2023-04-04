import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./search.css";

function Search() {
  const [name, setName] = useState([]);
  const fetchData = (e) => {
    
    e.preventDefault();
    axios.post("https://minor-backend-sq9t.onrender.com/search", {
      name: name,
      })
      .then(res => {
        console.log(res.data)
      })
        .catch(err =>{
          console.log(err)
        })
      
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
