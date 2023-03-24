import {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'



function Home(props){
const navigate = useNavigate()
useEffect(() => { 
  if(!localStorage.getItem('token')){
    navigate('/login')
  }
},[])

  console.log(props)
  return (
    <div>
    <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </div>
    
  )
}

export default Home
