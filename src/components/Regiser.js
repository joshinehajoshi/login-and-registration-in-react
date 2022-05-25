
import "../App.css";
import { useState } from "react";
import {Button, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://ttmg-backend.herokuapp.com/api/auth/staffRegister", {
        // headers: {
        //   Content-Type: "application/json"
        // },
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobile: mobileNumber,
          password: password
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
        setMessage("Registration Successful");
      } else if (res.status === 400){
        setMessage("Some of the fields are missing or incorrect");
      }
      else {
        setMessage("User Already Exists with the given email id");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <h3> Registration Form </h3>

        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        /> <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        /> <br />
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        /> <br />
        <input
          type="number"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        /> <br />

        <Button type="submit">Register</Button>

        <div className="message mt-3">{message ? <Alert>{message}</Alert> : null}</div>

        <Link to={'./login'} >Login</Link>


        
      </form>
    </div>
  );
}

export default Register;