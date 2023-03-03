import React,{useState} from 'react'

function Signup() {

  const [userSign, setUsrSign] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phoneno:"",
    password:""
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
    
    setUsrSign({firstname:"",lastname:"", email:"", phoneno: "", password:""});
  }

 


  
  return (
    <>
      <form action='' onSubmit={handleSubmit}>

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
        <label htmlFor='phoneno'>Phone</label>
        <input type="text" name="phoneno" id="phoneno" value={userSign.phoneno} onChange={handleInput}/>
        </div>

        <div>
        <label htmlFor='password'>Password</label>
        <input type="password" name="password" id="password" value={userSign.password} onChange={handleInput}/>
        </div>

        <button type='submit'>Sign Up</button>
      </form>
      
       </>
  )
}

export default Signup
