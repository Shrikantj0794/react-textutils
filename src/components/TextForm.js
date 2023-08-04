import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase!", "success")
     //title change
     document.title = 'TextUtils - Convert To UpperCase'
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleLoclick = ()=>{
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert(" Converted to Lowercase!", "success")
    //title change
    document.title = 'TextUtils - Convert To LowerCase'
  }
  const CopyText = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert(" copied to Clipboard!", "success")
    //title change
    document.title = 'TextUtils - Copy'
  }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>  
        <h3>{props.heading}</h3>  
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color: props.mode==='dark'? 'white': 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={ CopyText}>Copy Text</button>
    </div>
    <div className="containr my-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words {text.length} characters </p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p className='mx-3'>{text.length>0?text:"Eter something in textbox above to preview it here"}</p>
    </div>
    </>
  )
}
