import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import WordList from "./components/WordList";
import GetText from "./components/GetText";
import SigninScreen from "./components/SigninScreen";
import Profile from "./components/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Navbar />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/text" element={<GetText />} />
          <Route path="/wordlist" element={<WordList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
