import React from "react";
import "./searchresult.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/searchc";
import { useCart } from "../../context/cart";
function Searchresult(props) {
  const [values, setValues] = useSearch(props.values);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  console.log(values.results[0].data);

  return (
    <div className="container">
      <div className="text-center">
        <h1>Search Results</h1>
        <div className="d-flex flex-wrap mt-4">
          {values.results[0].data.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }} key={p.id}>
              <img src={p.Image} className="card-img-top" alt={p.Name} />
              <div className="card-body">
                <h5 className="card-title">{p.Name}</h5>
                <p className="card-text">{p.Desctription}</p>
                <p className="card-text"> $ {p.Price}</p>
                <button
                  className="btn btn-secondary ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    toast.success("Item added to cart");
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Searchresult;
