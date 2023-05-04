import React from 'react';


function Mlresult(props){
    // console.log(a);
    const message = window.history.state.state.message;
  return (
    <div className='container'>
      <p className='text-black'>{message}</p>
    </div>
  )
}

export default Mlresult
