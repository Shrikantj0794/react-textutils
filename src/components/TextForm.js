import React,{useState} from 'react'
export default function TextForm(props) {
  const handleUpclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)

  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handletoLowerCase = ()=>{
    let lowerCase = text.toLowerCase();
    setText(lowerCase)
  }
    const [text, setText] = useState('Enter text here');
  return (
    <div>  
        <h3>{props.heading}</h3>  
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handletoLowerCase}>Convert to uppercase</button>
    </div>
  )
}
