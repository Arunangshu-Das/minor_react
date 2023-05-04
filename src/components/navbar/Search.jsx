import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import Searchresult from"./Searchresult";
import { useSearch } from '../../context/searchc';
import axios from "axios";
function Search() {

  const [values, setValues] = useSearch();
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://minor-backend-sq9t.onrender.com/search", {
          name: values
      })
      setValues({values, results: [data]});
      navigate("/searchresult", { state: { values: data.results } })
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    // <div className="wrapper">
    //   <div className="container">
    //     <input
    //       type="text"
    //       className="input"
    //       placeholder="Search For Your Medicines!"
    //       onChange={(e) => setValues(e.target.value)}
    //     />
    //     <button value="search" className="close-btn" onClick={fetchData}>Search</button>
    //   </div>
    // </div>
    <div className="search">
        <form class="container">
            <div class="row g-3">
                <div class="col-9">
                <input type="text" className="form-control" placeholder="Search For Your Medicines!" aria-label="Search For Your Medicines!" onChange={(e) => setValues(e.target.value)} />
                </div>
                <div class="col-3">
                    <button type="submit" className="btn btn-primary" value="search" onClick={fetchData} >Submit</button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default Search;
