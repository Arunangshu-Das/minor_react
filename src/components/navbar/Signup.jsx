import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./signup.css"

function Signup() {

  const [userSign, setUsrSign] = useState({
    firstname:"",
    lastname:"",
    email:"",
    number:"",
    psw:"",
    address:"",
    psw_repeat:""
  });

  const [allEntry, setAllEntry] = useState([]);

  const handleInput = (e) => {
      const name = e.target.name
      const value = e.target.value
      console.log(name, value)
      setUsrSign({...userSign, [name]: value})
      console.log(name, value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newEntry = {...userSign, id: new Date().getTime().toString() }
    console.log(allEntry);
    setAllEntry([...allEntry, newEntry]);
    
    setUsrSign({firstname:"",lastname:"", email:"", number: "", psw:"",address:"",psw_repeat:"" });
  }

 


  
  return (
    <>
      {/* <form action='' onSubmit={handleSubmit}>

        <div>
        <label htmlFor='firstname'>First Name</label>
        <input type="text" name="firstname" id="firstname" value={userSign.firstname} onChange={handleInput}/>
        </div>
        <div>
        <label htmlFor='lastname'>Last Name</label>
        <input type="text" name="lastname" id="lastname" value={userSign.lastname} onChange={handleInput}/>
        </div>

        <div>
        <label htmlFor='email'>Email</label>
        <input type="email" name="email" id="email" value={userSign.email} onChange={handleInput}/>
        </div>

        <div>
        <label htmlFor='number'>Phone</label>
        <input type="text" name="number" id="number" value={userSign.number} onChange={handleInput}/>
        </div>

        <div>
        <label htmlFor='password'>Password</label>
        <input type="password" name="password" id="password" value={userSign.password} onChange={handleInput}/>
        </div>

        <button type='submit'>Sign Up</button>
      </form> */}

<form action=" " onSubmit={handleSubmit}>
		<h1>Sign Up</h1>
		<p>Please fill in this form to create an account.</p>
		<hr/>
		
		<label for="name"><b>First Name</b></label>
		<input type="text" placeholder="Enter Your Name" name="firstname" value={userSign.firstname} onChange={handleInput} required/><br/>

        <label for="name"><b>Last Name</b></label>
		<input type="text" placeholder="Enter Your Name" name="lastname" value={userSign.lastname} onChange={handleInput} required/><br/>

        <label for="name"><b>E-Mail</b></label>
		<input type="email" placeholder="Enter Your Email Id" name="email" value={userSign.email} onChange={handleInput} required/><br/>
		
		<label for="number"><b>Contact No.</b></label>
		<input type="number" placeholder="Enter Your Contact No." name="number" value={userSign.number} onChange={handleInput} required/><br/>
		
		<label for="email"><b>Address</b></label> 
		<input type="text" placeholder="Enter Your Full Address" name="address" value={userSign.address} onChange={handleInput} required/><br/>

		<label for="pwd"><b>Password</b></label>
		<input type="password" placeholder="Enter Your Password" name="psw" value={userSign.psw} onChange={handleInput} required/><br/>

		<label for="psw-repeat"><b>Confirm Password</b></label>
		<input type="password" placeholder="Repeat Your Password" name="psw_repeat" value={userSign.psw_repeat} onChange={handleInput} required/><br/>
		<hr/>
		<p>By creating an account you agree to our <Link to="#">Terms & Privacy</Link>.</p>

		<button type="submit" class="btn">Register</button>
		
  
		
		<p>Already have an account? <Link to="/login">Sign in</Link></p>
		
	</form>
      
  </>
  )
}

export default Signup
