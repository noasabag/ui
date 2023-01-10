import "../pages/signin.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   const getUserDetils = () => {
  //     axios(option)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };
  useEffect(() => {
    const option = {
      url: "http://localhost:3001/user/getme",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios(option)
      .then((response) => {
        setFirstName(response.data.firstname);
        setSurname(response.data.lastname);
        setEmail(response.data.email);
        setPassword(response.data.password);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <form className="signIn">
        <p>Account Deatails</p>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <label> Surname</label>
        <input
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        ></input>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input></input>

        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};
export default Profile;
