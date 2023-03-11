import React, {useState} from 'react'
import './login.css';

function Login() {
  
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");


  const [allEntry, setAllEntry] = useState([]);
  

  const submitForm = (e)=>{
    e.preventDefault();

    const newEntry = {text: text, password: password};

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  
  return (
    
    <body styles={"background-color: rgba(127, 125, 125, 0.954);"}><>
    <form className ="formbox"action=" " onSubmit={submitForm}>
    <h1>Login</h1>
    
      
      <input type="text" name="" id="text" placeholder='Username' autoComplete='none' value={text} onChange={(e)=>setText(e.target.value)}/>
    
    
      
      <input type="password" name="" placeholder='Password' id="password" autoComplete='none' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    

    <input type="submit" name="" value="Login"/>
    </form>
    </>
    </body>
    
  )
}

export default Login
