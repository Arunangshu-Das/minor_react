import React from 'react'
import { useEffect ,useState } from 'react'
import axios from 'axios'
import "./searchresult.css"
import { useLocation } from "react-router-dom";

function Searchresult() {

  const location = useLocation();
  const name = location?.state?.name || '';

  const [medicines, setMedicines] = useState([name]);
  
  useEffect(() => {
    axios
      .post('https://minor-backend-sq9t.onrender.com/search', {
        name: name,
      })
      .then(res => {
        console.log(res.data);
        setMedicines(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [name]);

  // Render the Searchresult component with the name value

  return (
    
        <div className="wrapper">
          <h1><span styles="font-weight: bold;"> Search Results</span></h1>
          {medicines && medicines.length > 0 ? (
          medicines.map((medicine) => (
          <div className="class=style={{backgroundImage: 'url(#)'}}cols" key={medicine.id}>
            <div className="col" onTouchStart={() => this.classList.toggle('hover')}>
              <div className="container">
                <div className="front" style={{backgroundImage: `url(${medicine.image})`}}>
                  <div className="inner">
                    <p>{medicine.name}</p>
                    <span>Medicine 1</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      {medicine.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div className="front" style={{backgroundImage: 'url({medicine.image})'}}>
                  <div className="inner">
                    <p>Search Result 2</p>
                    <span>Medicine 2</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Description of the Medicine 2 of Search Result 2 and more
                      details given by MediQuick Searching!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div className="front" style={{backgroundImage: 'url(#)'}}>
                  <div className="inner">
                    <p>Search Result 3</p>
                    <span>Medicine 3</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Description of the Medicine 3 of Search Result 3 and more
                      details given by MediQuick Searching!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div className="front" style={{backgroundImage: 'url(#)'}}>
                  <div className="inner">
                    <p>Search Result 4</p>
                    <span>Medicine 4</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Description of the Medicine 4 of Search Result 4 and more
                      details given by MediQuick Searching!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{backgroundImage: 'url(#)'}}
                >
                  <div className="inner">
                    <p>Search Result 5</p>
                    <span>Medicine 5</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Description of the Medicine 5 of Search Result 5 and more
                      details given by MediQuick Searching!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div className="front" style={{backgroundImage: 'url(#)'}}>
                  <div className="inner">
                    <p>Search Result 6</p>
                    <span>Medicine 6</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Description of the Medicine 6 of Search Result 6 and more
                      details given by MediQuick Searching!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div className="front" style={{backgroundImage: 'url(#)'}}>
                  <div className="inner">
                    <p>Search Result 7</p>
                    <span>Medicine 7</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Description of the Medicine 7 of Search Result 7 and more
                      details given by MediQuick Searching!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div className="front" style={{backgroundImage: 'url(#)'}}>
                  <div className="inner">
                    <p>Search Result 8</p>
                    <span>Medicine 8</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Description of the Medicine 8 of Search Result 8 and more
                      details given by MediQuick Searching!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )) ) : (
            <p>No results found.</p>
          )}
        </div>
      )

}

export default Searchresult
