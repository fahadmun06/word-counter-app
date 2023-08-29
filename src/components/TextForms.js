import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TextForms(props) {
  const [text, setText] = useState("");
  //  text = "Enter the text to Analyse"  //wrong way to initialize the value
  const handleUpperButton = () => {
    if (!text) {
      toast("Enter the text correctly");
      return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    toast("Converted to upperCase");
  };
  const handleLowerButton = () => {
    if (!text) {
      toast("Enter the text correctly");
      return;
    }
    let newText = text.toLowerCase();
    setText(newText);
    toast("Converted to lowerCase");
  };
  const handleClear = () => {
    if (!text) {
      toast("Enter the text to delete");
      return;
    }
    let newText = "";
    setText(newText);
    toast("cleared successfully");
  };
  const handleCapitalized = () => {
    if (!text) {
      toast("Enter the text correctly");
      return;
    }
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    const newText2 = newText.join(" ");
    setText(newText2);
    toast("Converted to capitalized");
  };
  const handleCopy = () => {
    let newText = document.getElementById("myText");
    newText.select();
    if (!newText.value) {
      toast("Enter the text for copy");
      return;
    }
    if (navigator.clipboard.writeText(newText.value)) {
      document.getSelection().removeAllRanges()
      toast("The text copied successfully");
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }} className="my-4">{props.heading}</h1>
        <div className="border px-3 py-1 my-2 rounded-3"
          style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#000814' : '#cbf3f0' }}
          id="countBorder">
          <p className="fs-4 mb-0 p-2"><b className="fs-3">{text.split(/\s/).filter((element) => { return element.length !== 0 }).length}</b> Words&ensp;<b>&</b>&ensp;<b className="fs-3">{text.length}</b> Characters</p>
        </div>
        <textarea
          className="form-control rounded-1"
          placeholder="Start typing, copying and paste your Articles...."
          style={{ backgroundColor: props.mode === 'dark' ? '#011627' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          value={text}
          onChange={handleChange}
          id="myText"
          rows="8"
        ></textarea>

        <div className="my-3">
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'info'} rounded-1 mx-1 my-1`} onClick={handleUpperButton} >Convert to UpperCase</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'info'} rounded-1 mx-1 my-1`} onClick={handleLowerButton} >Convert to lowerCase</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'info'} rounded-1 mx-1 my-1`} onClick={handleCapitalized} >Capitalized Word</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'info'} rounded-1 mx-1 my-1`} onClick={handleCopy} >Copy to clipboard</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'info'} rounded-1 mx-1 my-1`} onClick={handleClear} >Clear text</button>
        </div>
        <div className="my-4">
          <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h3>
          <div className="border rounded-3 p-2">
            <p style={{ color: props.mode === "dark" ? 'white' : 'black' }}>{text.length > 0 ? text : 'Enter something above the textboard to preview here?'}</p>
          </div>
        </div>
      </div>
    </>
  );
}
