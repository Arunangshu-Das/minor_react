import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer,toast } from "react-toastify";
import "./signup.css";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  // const [psw_repeat, setPsw_repeat] = useState("")

  const navigate = useNavigate();
  const isValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in";
    if (firstname === null || firstname === "") {
      isproceed = false;
      errormessage += "firstname";
    }
    if (lastname === null || lastname === "") {
      isproceed = false;
      errormessage += "lastname";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += "email";
    }
    if (phoneno === null || phoneno === "") {
      isproceed = false;
      errormessage += "phoneno";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += "password";
    }
    if (address === null || address === "") {
      isproceed = false;
      errormessage += "address";
    }
    if (!isproceed) {
      alert(errormessage);
    }
    return isproceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidate) {
      console.log(firstname, lastname, email, phoneno, password, address);
      axios
        .post("https://minor-backend-sq9t.onrender.com/register", {
          firstname: firstname,
          lastname: lastname,
          email: email,
          phoneno: phoneno,
          address: address,
          password: password,
        })
        .then((res) => {
          // alert("Registered Successfully")
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          navigate("/");
        })
        .catch((err) => {
          alert("Error :" + err.message);
          console.log(err);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h>Sign Up</h>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="name">
          <b>First Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <br />

        <label htmlFor="name">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <br />

        <label htmlFor="name">
          <b>E-Mail</b>
        </label>
        <input
          type="email"
          placeholder="Enter Your Email Id"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label htmlFor="number">
          <b>Contact No.</b>
        </label>
        <input
          type="number"
          placeholder="Enter Your Contact No."
          name="phoneno"
          value={phoneno}
          onChange={(e) => setPhoneno(e.target.value)}
          required
        />
        <br />

        <label htmlFor="email">
          <b>Address</b>
        </label>
        <input
          type="text"
          placeholder="Enter Your Full Address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />

        <label htmlFor="pwd">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <label htmlFor="psw-repeat">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Your Password"
          name="psw-repeat"
          required
        />
        <br />
        <hr />
        <p>
          By creating an account you agree to our{" "}
          <Link href="/">Terms & Privacy</Link>.
        </p>

        <button type="submit" className="btn">
          Register
        </button>

        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </>
  );
}

export default Signup;
