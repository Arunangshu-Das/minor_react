import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import Searchresult from"./Searchresult";
import { useSearch } from '../../context/searchc';
import axios from "axios";
function Search() {

  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  // const [auth, setAuth] = useSearch();

  const fetchData = async (e) => {
    // navigate('/searchresult', { state: { name: name } });
    e.preventDefault();
    try {
      const { data } = await axios.post("https://minor-backend-sq9t.onrender.com/search", {
          name: values
      })
      setValues({values, results: [data]});
      navigate("/searchresult", { state: { values: data.results } })
      // setAuth({ ...auth, results: data.results }); // Update the results in the SearchContext
      // navigate("/searchresult", { state: { values: data.results } }); 
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="wrapper">
      <div className="container">
        <input
          type="text"
          className="input"
          placeholder="Search For Your Medicines!"
          value={values}
        onChange={(e) => setValues(e.target.value)}
        />
        <button value="search" className="close-btn" onClick={fetchData}>Search</button>
      </div>
    </div>
  );
}

export default Search;
