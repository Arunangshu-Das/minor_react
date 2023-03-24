import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./search.css";

function Search() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  const [input, setInput] = useState("");

  const fetchData = (value) => {};

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        name=""
        value={input}
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
      />
      <Link className="search-btn" href="/">
        <i className="fa fa-search" aria-hidden="true"></i>
      </Link>
    </div>
  );
}

export default Search;
