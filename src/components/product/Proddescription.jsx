import React, { useEffect, useState } from "react";
import axios from "axios";
import "./proddescription.css";
const Proddescription = (props) => {
  const { data } = props.location.state;
  console.log(data)
  return (
    <div className="container">
      {data.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        data.map((item) => (
          <div className="row">
            <div className="col-sm-6">
              <div
                id="carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="item active">
                    <img src={item.Image} alt="Medicine" />
                  </div>
                  {/* <div className="item">
                <img src={"http://placehold.it/350x250/00ffff/000&amp;text=Product+Image+2"} />
              </div> */}
                </div>
              </div>
              <div className="clearfix">
                <div
                  id="thumbcarousel"
                  className="carousel slide"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="item active">
                      <div
                        data-target="#carousel"
                        data-slide-to="0"
                        className="thumb"
                      >
                        <img src={item.image} alt="Medicine" />
                      </div>
                      <div
                        data-target="#carousel"
                        data-slide-to="2"
                        className="thumb"
                      ></div>
                    </div>
                  </div>
                  <a
                    className="left carousel-control"
                    href="#thumbcarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="glyphicon glyphicon-chevron-left"></span>
                  </a>
                  <a
                    className="right carousel-control"
                    href="#thumbcarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span className="glyphicon glyphicon-chevron-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h2>{item.Name}</h2>
              <h3>Price: {item.Price}</h3>
              <p>{item.description}</p>
              {/* <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus.
          </p> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Proddescription;
