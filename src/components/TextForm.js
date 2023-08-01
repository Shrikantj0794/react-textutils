import React,{useState} from 'react'
export default function TextForm(props) {
  const handleUpclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)

  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleLoclick = ()=>{
    let lowerCase = text.toLowerCase();
    setText(lowerCase)
  }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>  
        <h3>{props.heading}</h3>  
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to uppercase</button>
    </div>
    <div className="containr my-3">
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words {text.length} characters </p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Previes</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
