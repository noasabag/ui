import "../pages/signin.css";
import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const signinHandler = useCallback(() => {
    const option = {
      method: "post",
      url: "http://localhost:3001/user/login",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      data: {
        email,
        password,
      },
    };

    axios(option)
      .then(function(response) {
        const { token } = response.data;

        if (response.status === 200) {
          console.log(response.status);
          localStorage.setItem("token", token);
          setIsLoggedIn(true);
        } else {
          console.log(response.data);
          setIsLoggedIn(false);
        }
        // console.log(response.data + "  " + isLoggedIn + response.status);
      })
      .catch((error) => {
        setIsLoggedIn(false);

        //console.log(error + " " + isLoggedIn);
      });
  }, [email, password]);
  useEffect(() => {
    // console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate("/text");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div>
      <h1 className="title">Privte English Mentor</h1>
      <form
        className="signIn"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Sign in</h2>
        <p>Enter your email and password to sign in</p>
        <label>Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        ></input>
        <label>Password</label>

        <input
          id="password"
          type={passwordShown ? "text" : "password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
        />
        <input id="toggle-password" type="checkbox" onClick={togglePassword} />
        <label htmlFor="toggle-password">Show Password</label>

        <button type="submit" onClick={signinHandler}>
          Sign in
        </button>
        <label>Keep me logged in</label>
        <input type="checkbox" name="loggedin" />
        <p>Don't have an account?</p>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
export default SigninScreen;
