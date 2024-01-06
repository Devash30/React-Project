// Remove any explicit import for React at the top of your files
import React from 'react';
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enable successfully", "success");
      document.title = "TextUtils - Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enable successfully", "success");
      document.title = "TextUtils - Light";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Textutils"
          mode={mode}
          toggleModeSwitch={toggleMode}
        />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route exact path="/About" element={<About />} />
          <Route exact path="/" element={<TextForm heading = "Enter text to analyze" mode={mode} alert={alert} showAlert={showAlert}/>}/>
        </Routes>    
      </Router>
    </>
  );
}

export default App;
