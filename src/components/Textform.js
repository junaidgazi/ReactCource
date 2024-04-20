import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("upper case was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick=()=>{
        // console.log("upper case was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("handleOnChange was clicked");
        setText(event.target.value);
    }
    const [text, setText]=useState('');
    // console.log(useState('Enter text Here'));
    
  return (
    <>
    
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myText" className="form-label">Enter Text Here</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowerClick} >Convert to LowerCase</button>
        </div>
        <div className="container my-5" >
            <h1>your text summery</h1>
            <p>{text.split(" ").length} words, {text.length} charecters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
