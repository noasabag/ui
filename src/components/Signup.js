import "../pages/signin.css";
import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const option = {
    method: "post",
    url: "http://localhost:3001/user/newUser",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    data: {
      email,
      password,
      firstname: firstName,
      lastname: surname,
      confirmpassword: confirmPassword,
    },
  };
  const onsubmitHandler = (e) => {
    e.preventDefault();

    axios(option)
      .then((response) => {
        console.log(response.status);
        navigate("/text");
        localStorage.setItem("token", response.data.token);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  return (
    <div>
      <h1 className="title">Privte English Mentor</h1>
      <form
        className="signIn"
        onSubmit={(e) => {
          onsubmitHandler(e);
        }}
      >
        <h2>Create An Account</h2>
        <p>Already have an account?</p>{" "}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Sign in
        </button>
        <label>First Name</label>
        <input
          placeholder="Enter your first name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <label> Surname</label>
        <input
          placeholder="Enter your surname"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        ></input>
        <label>Email</label>
        <input
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input id="password" type={passwordShown ? "text" : "password"} />
        <input id="toggle-password" type="checkbox" onClick={togglePassword} />
        <label htmlFor="toggle-password">Show Password</label>
        <label>Confirm password</label>
        <input
          placeholder="Enter your password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        ></input>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default Signup;
