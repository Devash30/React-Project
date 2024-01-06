import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upercase was changed" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };

  const handleLowClick = () => {
    // console.log("LowerCase was changed" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared textbox", "success")
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied data to clipboard", "success")
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Removed extra space", "success")
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'} }
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary my-3 mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-3 mx-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>

      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter your text in upper box to print in preview'}</p>
      </div>
    </>
  );
}
