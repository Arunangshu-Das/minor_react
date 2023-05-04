import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Mlresult(){
    // console.log(a);
    const message = window?.history?.state?.usr?.message;    
  return (
    <div className='container'>
      <i class="text-black display-6 d-inline p-2 bi bi-virus"></i>{' '}<h1 className='d-inline p-2 text-black'>You are diagonsed with {message}</h1>{' '}<i class="text-black display-6 d-inline p-2 bi bi-virus"></i>
      <br />
      <Link to="/human" className="mt-5 btn btn-outline-primary">
          Go Back
        </Link>
    </div>
  )
}

export default Mlresult
