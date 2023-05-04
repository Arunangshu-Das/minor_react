import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from 'react-hot-toast';
import "./signup.css";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth] = useAuth()
  // const [psw_repeat, setPsw_repeat] = useState("")

  const navigate = useNavigate();
  const isValidate = () => {
    let isproceed = true;
    let message = "Please enter the value in";
    if (firstname === null || firstname === "") {
      isproceed = false;
      message += "firstname";
    }
    if (lastname === null || lastname === "") {
      isproceed = false;
      message += "lastname";
    }
    if (email === null || email === "") {
      isproceed = false;
      message += "email";
    }
    if (phoneno === null || phoneno === "") {
      isproceed = false;
      message += "phoneno";
    }
    if (password === null || password === "") {
      isproceed = false;
      message += "password";
    }
    if (address === null || address === "") {
      isproceed = false;
      message += "address";
    }
    if (!isproceed) {
      alert(message);
    }
    return isproceed;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidate) {
     try{
      const res = await axios.post("https://minor-backend-sq9t.onrender.com/register", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phoneno: phoneno,
        address: address,
        password: password,
      })
      if(res.data.success){
        toast.success("Registered Succesfully");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate("/");
      }
     } catch(err){
      toast.error('Something went wrong')
      console.log(err);
     }
    }
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
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
        <br/>

        <label htmlFor="name">
          <b>E-Mail</b>
        </label>
        <input
          type="email"
          placeholder="Enter Your Email Id"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // required
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
          // required
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
          // required
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
          // required
        />
        <br />

        <label htmlFor="psw-repeat">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Your Password"
          name="psw-repeat"
          // required
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
      </form> */}


    <form className="p-4 container border rounded border-primary-subtle" onSubmit={handleSubmit}>
      <h1>
      <i class="bi bi-person-lines-fill"></i>{' '}Signup
      </h1>
      <div className="text-success">
        <hr/>
      </div>
      <div className="row g-2 mb-3">
        <div className="col-md">
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGrid"
                      placeholder="Enter Your Name"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required autoComplete='off'
            />
            <label htmlFor="floatingInputGrid">First Name</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGrid" 
                      placeholder="Enter Your Name"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      required autoComplete='off'
            />
            <label htmlFor="floatingInputGrid">Last Name</label>
          </div>
        </div>
      </div>
      <div className="row g-2 mb-3">
        <div className="col-md">
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInputGrid" 
                      placeholder="Enter Your Email Id"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required autoComplete='off'
            />
            <label htmlFor="floatingInputGrid">Email address</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingInputGrid"
                      placeholder="Enter Your Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required autoComplete='off'
            />
            <label htmlFor="floatingInputGrid">Password</label>
          </div>
        </div>
      </div>
      <div className="row g-2 mb-3">
        <div className="col-md">
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGrid" 
                      placeholder="Enter Your Contact No."
                      name="phoneno"
                      value={phoneno}
                      onChange={(e) => setPhoneno(e.target.value)}
                      required autoComplete='off'
            />
            <label htmlFor="floatingInputGrid">Phone Number</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGrid" 
                      placeholder="Enter Your Full Address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required autoComplete='off'
            />
            <label htmlFor="floatingInputGrid">Address</label>
          </div>
        </div>
      </div>
      <form class="d-flex justify-content-between was-validated">
      <div class="form-check mb-3">
        <input type="checkbox" class="form-check-input" id="validationFormCheck1" required/>
        <label class="form-check-label" for="validationFormCheck1">I agree that I will follow all terms and conditions.</label>
        <div class="invalid-feedback">Please check this to continue</div>
      </div>
      </form>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>
      <p className="mt-3" style={{'color':'black'}}>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </form>

    </>
  );
}

export default Signup;
