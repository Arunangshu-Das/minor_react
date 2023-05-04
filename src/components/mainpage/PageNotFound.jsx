import React from 'react'
import { Link } from 'react-router-dom'
import './pageNotFound.css'
const PageNotFound = () => {

  return (
    <div className='container'>
      <h1>404 Error!</h1>
      <p className='text-black'>Page not Found</p>
      {/* <link to='/'>Go Back</link> */}
      <Link to="/" className="btn btn-outline-secondary">
          Go Back
        </Link>
    </div>
  )
}

export default PageNotFound
