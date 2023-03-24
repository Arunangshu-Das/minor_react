import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import "./signup.css";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  // const [psw_repeat, setPsw_repeat] = useState("")

  const handleSubmit =  (e) => {
    e.preventDefault();
    // let obj = { firstname, lastname, email, phoneno, password, address };
    console.log(firstname, lastname, email, phoneno, password, address);
    axios.post("https://minor-backend-sq9t.onrender.com/register",{
      firstname: firstname,
      lastname: lastname,
      email: email,
      phoneno: phoneno,
      address: address,
      password: password,
    })
    .then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <h1>SignUp</h1>
      <main className="signup"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzb3_uB-1LYMU3ZxNezavmDSdUVoMHw3SUoJDS4xt5DkePQCHvFFUFJJo2XXkn2hMJEtM&usqp=CAU" alt='MediQUICK'/> */}
        <div className="group">
          <label htmlFor="firstname" className="text">
            First Name
          </label>
          <input
            type="text"
            className="username"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="lastname" className="text">
            Last Name
          </label>
          <input
            type="text"
            className="username"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>

        <div className="group">
          <label htmlFor="email_address">Email Address</label>
          <input
            type="email"
            name="email"
            className="email_address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="gender">Gender</label>
          <select required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="address" className="text">
            Address
          </label>
          <input
            type="text"
            className="username"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="username" className="text">
            Contact Number
          </label>
          <input
            type="text"
            className="username"
            name="phoenno"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            className="confirm_password"
            required
          />
        </div>
        <hr />
        <p span styles={"font-size: large;"}>
          By creating an account you agree to our{" "}
          <Link to="#">Terms & Privacy</Link>.
        </p>
        <div className="group">
          <button className="btn">Register</button>
        </div>

        <p span styles={"font-size: large;"}>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </form>
    </>
  );
}

export default Signup;
