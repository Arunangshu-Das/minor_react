import React, { useEffect, useState } from "react";
import axios from "axios";
import "./proddescription.css";
const Proddescription = () => {

//   const getProduct = async()=>{
//     try {
//         const {data} = await
//     } catch (error) {
        
//     }
//   }


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item active">
                <img src={"http://placehold.it/350x250/e8117f/fff&amp;text=Product+Main"} />
              </div>
              <div className="item">
                <img src={"http://placehold.it/350x250/00ffff/000&amp;text=Product+Image+2"} />
              </div>
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
                    <img src={"http://placehold.it/100/e8117f/fff&amp;text=Product+Main"} />
                  </div>
                  <div
                    data-target="#carousel"
                    data-slide-to="1"
                    className="thumb"
                  >
                    <img src={"http://placehold.it/100/00ffff/000&amp;text=Product+Image+2"} />
                  </div>
                  <div
                    data-target="#carousel"
                    data-slide-to="2"
                    className="thumb"
                  >
                  </div>
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
          <h2>Products</h2>
          <h3>Some product subhead</h3>
          <p>
            Product description goes here. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proddescription;
