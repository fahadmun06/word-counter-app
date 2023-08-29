import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import About from './components/About';
import TextForms from './components/TextForms';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      toast("Dark Mode activated")
      document.body.style.backgroundColor = "#1d3557"
    }
    else {
      setMode("light")
      toast("Light Mode activated")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <ToastContainer />
        <div className="py-3">
          <Switch>
            <Route exact path="/">
              <TextForms heading="Enter Any text to change its Case." mode={mode} />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
