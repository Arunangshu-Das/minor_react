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
        // setData(res.data.data);
        const filteredData = res.data.data.filter((item) =>
          Object.values(item).every((value) => value !== null)
        );
        //This code uses the filter() method to return only the objects in the data array that have values for all properties.
        //The Object.values() method is used to get an array of the property values for each object, and the every() method is used to check if all values are not null. If all values are not null,
        // the object is included in the filtered data array. The setData() function is then called with the filtered data array to update the state with the filtered data.
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
    navigate('/proddescription', { state: { data: filteredData } });
  }

  console.log(filteredData);
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

      <div id="wrap">
        <div id="columns" className="columns_4">
          {data.length === 0 ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            data.map((p) => (
              <figure key={p.id}>
                <img src={p.Image} style={{ objectFit: "cover" }} alt="medicine" />
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
                  onClick={handleClick}
                >
                  Description
                </Link>
              </figure>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
