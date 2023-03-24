import React from 'react'
import { Link } from 'react-router-dom'
import  "./Footer.css"
function Footer() {
  return (
    <div>
        <footer className="footer">
        <div className="icons">
           <Link to="/"><i className="fab fa-facebook"></i></Link>
           <Link to="/"><i className="fab fa-linkedin"></i></Link>
           <Link to="/"><i className="fab fa-instagram"></i></Link>
           <Link to="/"><i className="fab fa-twitter"></i></Link>
            <p className="company-name">
                &copy; MediQuick 2023, All Rights Reserved
            </p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
