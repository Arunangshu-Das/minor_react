import React from "react";
import { useLocation } from "react-router-dom";
import "./proddescription.css";

const Proddescription = (props) => {
  // const { data } = props?.this?.state;
  const location = useLocation();
  const { values } = location.state;
  // const {values}=props;
  // console.log(props.values);
  console.log(values)

  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-sm-6">
    //       <div id="carousel" className="carousel slide" data-ride="carousel">
    //         <div className="carousel-inner">
    //           <div className="item active">
    //             <img src={data.Image} alt="Medicine" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-sm-6">
    //       <h2>{data.Name}</h2>
    //       <h3>Price: {data.Price}</h3>
    //       <p>{data.description}</p>
    //     </div>
    //   </div>
    // </div>
    <div>
      hello
    </div>
  );
};

export default Proddescription;
