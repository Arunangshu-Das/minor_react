import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import "./searchresult.css";
// import { useLocation } from "react-router-dom";
import { useSearch } from '../../context/searchc';
function Searchresult() {
  // const location = useLocation();
  // const name = location?.state?.name || "";

  const [values, setValues] = useSearch("");

  // useEffect(() => {
  //   axios
  //     .post("https://minor-backend-sq9t.onrender.com/search", {
  //       name: name,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setMedicines(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [name]);

  // Render the Searchresult component with the name value

  return (
    // <div className="wrapper">
    //   <h1>
    //     <span styles="font-weight: bold;"> Search Results</span>
    //   </h1>

    //   <div
    //     className="class=style={{backgroundImage: 'url(#)'}}cols"
    //   >
    //     {medicines && medicines.length > 0  ? (
    //       medicines.map((medicine) => (
    //         <div
    //           className="col"
    //           onTouchStart={() => this.classList.toggle("hover")}
    //         >
    //           <div className="container">
    //             <div
    //               className="front"
    //               style={{ backgroundImage: `url(${medicine.image})` }}
    //             >
    //               <div className="inner">
    //                 <p>{medicine.name}</p>
    //                 <span>Medicine 1</span>
    //               </div>
    //             </div>
    //             <div className="back">
    //               <div className="inner">
    //                 <p>{medicine.description}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <p>No results found.</p>
    //     )}
    //   </div>
    // </div>
  //   <div className="container">
  //   <div className="text-center">
  //     <h1>Search Resuts</h1>
  //     <h6>
  //       {values && values.results && values.results.length < 1
  //         ? "No Products Found"
  //         : `Found ${values?.results.length}`}
  //     </h6>
  //     <div className="d-flex flex-wrap mt-4">
  //       {values?.results.map((p) => (
  //         <div className="card m-2" style={{ width: "18rem" }}>
  //           <img
  //             src={p.image}
  //             className="card-img-top"
  //           />
  //           <div className="card-body">
  //             <h5 className="card-title">{p.name}</h5>
  //             <p className="card-text">
  //               {p.description}
  //             </p>
  //             <p className="card-text"> $ {p.price}</p>
  //             <button class="btn btn-primary ms-1">More Details</button>
  //             <button class="btn btn-secondary ms-1">ADD TO CART</button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </div>
  <div className="container">
  <div className="text-center">
    <h1>Search Results</h1>
    <h6>
      {values && values.results && values.results.length < 1
        ? "No Products Found"
        : `Found ${values?.results.length}`}
    </h6>
    <div className="d-flex flex-wrap mt-4">
      {values &&
        values.results &&
        values.results.map((p) => (
          <div className="card m-2" style={{ width: "18rem" }} key={p.id}>
            <img src={p.image} className="card-img-top" alt={p.name} />
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">{p.description}</p>
              <p className="card-text"> $ {p.price}</p>
              <button className="btn btn-primary ms-1">More Details</button>
              <button className="btn btn-secondary ms-1">ADD TO CART</button>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>
  );
}

export default Searchresult;
