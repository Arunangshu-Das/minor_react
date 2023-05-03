import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import "./home.css";
import { useState } from "react";
import { useCart } from "../../context/cart";
import C1 from "./C1.jpg";
import C2 from "./C2.jpg";
import C3 from "./C3.jpg";
import e from "cors";

function Home(props) {
  // const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  // const history = useHistory();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cart, setCart] = useCart();
  useEffect(() => {
    async function fetchData(e) {
      try {
        const res = await axios.get(
          "https://minor-backend-sq9t.onrender.com/all"
        );
        const filteredData = res.data.data.filter((item) =>
          Object.values(item).every((value) => value !== null)
        );
        setData(filteredData);
        setFilteredData(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleClick = () => {

    navigate('/proddescription',  { state: { values: data} })
    console.log(data)
  }

  // console.log(filteredData);
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={C1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={C2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={C3} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      {/* <div id="wrap">
        <div id="columns" className="columns_4">
          {data.map((p) => (
            <figure>
              <img src={p.Image} alt="medicine" />
              <figcaption>{p.Name}</figcaption>
              <span className="price">{p.Price}</span>
              <Link
                className="button"
                to="/"
                onClick={() => {
                  setCart([...cart, p]);
                  toast.success("Item added to cart");
                }}
              >
                Add to Cart
              </Link>
              <Link
                className="button"
                to="/proddescription"
                onClick={() => navigate("/proddescription")}
              >
                Description
              </Link>
            </figure>
          ))}
        </div>
      </div> */}
    {/* <form onSubmit={handleClick}> */}
      <div id="wrap">
        <div id="columns" className="columns_4">
          {data.length === 0 ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            data.map((p) => (
              <figure key={p.id}>
                <img src={p.Image} style={{ objectFit: "cover" }} alt="medicine" />
                <figcaption>{p.Name}</figcaption>
                <span className="price">₹{p.Price}</span>
                <Link
                  className="button"
                  type="submit"
                  onClick={(e)=>{
                    e.preventDefault()
                  }}
                >
                  {p.Desctription}
                </Link>
                <Link
                  className="button"
                  type="submit"
                  to="/"
                  onClick={() => {
                    setCart([...cart, p]);
                    toast.success("Item added to cart");
                  }}
                >
                  Add to Cart
                </Link>
              </figure>
            ))
          )}
        </div>
      </div>
      <section id="testimonials">
    <div className="testimonial-heading">
        <span style={{'font-size':'40px'}}><b>Comments</b></span>
        <h4>Clients Says</h4>
    </div>
    <div className="testimonial-box-container">
        <div className="testimonial-box">
            <div className="box-top">
                <div className="profile">
                    <div className="profile-img">
                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="This is review "/>
                    </div>
                    <div className="name-user">
                        <strong>Sayonil Sarkar</strong>
                        <span>@ssarkar</span>
                    </div>
                </div>
              
            </div>
            <div className="client-comment">
                <p>Excellent Service,Quick Remedy,Fast Delivery!</p>
            </div>
        </div>
        <div className="testimonial-box">
            <div className="box-top">
                <div className="profile">
                    <div className="profile-img">
                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="This is review "/>
                    </div>
                    <div className="name-user">
                        <strong>Suprio Samanta</strong>
                        <span>@suprio13</span>
                    </div>
                </div>
               
            </div>
            <div className="client-comment">
                <p>Best Service at Spot! All Medicines At One Place!</p>
            </div>
        </div>
        <div className="testimonial-box">
            <div className="box-top">
                <div className="profile">
                    <div className="profile-img">
                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="This is review "/>
                    </div>
                    <div className="name-user">
                        <strong>Aryan Gupta</strong>
                        <span>@aryan2001</span>
                    </div>
                </div>
              
            </div>
            <div className="client-comment">
                <p>One Stop Solution to All Pharmaceutical and Medical Problems</p>
            </div>
        </div>
        
    </div>
  </section>
<div>
      <section className="contact-page-section">
      <div className="container">
        <div className="sec-title">
          <h1>Let's Get in Touch.</h1>
        </div>
        <div className="inner-container">
          <div className="row clearfix">

            <div className="form-column col-md-8 col-sm-12 col-xs-12">
              <div className="inner-column">

                <div className="contact-form">
                  <form method="post" action="https://formspree.io/f/xyyaokbg" id="contact-form">
                    <div className="row clearfix">
                      <div className="form-group col-md-6 col-sm-6 co-xs-12">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          autoComplete = "off"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 co-xs-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          autoComplete = "off"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 co-xs-12">
                        <input
                          type="text"
                          name="address"
                          placeholder="Address"
                          autoComplete = "off"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 co-xs-12">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          autoComplete = "off"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12 col-sm-12 co-xs-12">
                        <textarea
                          name="message"
                          placeholder="Message- Your Concern/Feedback"
                        ></textarea>
                      </div>
                      <div className="form-group col-md-12 col-sm-12 co-xs-12">
                        <button type="submit" className="theme-btn btn-style-one">
                          Send Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
               
              </div>
            </div>
            
            <div className="info-column col-md-4 col-sm-12 col-xs-12">
              <div className="inner-column">
                <h1>Contact Info</h1>
                <ul className="list-info">
                  <li>
                    <i className="fas fa-globe"></i>MediQuick,Kolkata- ARAK Group
                    Initiative
                  </li>
                  <li><i className="far fa-envelope" style={{'padding-right':'6px'}}></i> mediquick@gmail.com</li>
                  <li>
                    <i className="fas fa-phone"></i>9012345672 <br />
                    9234681210
                  </li>
                </ul>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
}

export default Home;
