import React,{useState} from 'react'

export default function TextForm(props) { 
  const handleUpclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase!", "success")
     //title change
    //  document.title = 'TextUtils - Convert To UpperCase'
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleLoclick = ()=>{
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert(" Converted to Lowercase!", "success")
    //title change
    // document.title = 'TextUtils - Convert To LowerCase'
  }
  const CopyText = ()=>{
    
    navigator.clipboard.writeText(text)
    props.showAlert(" copied to Clipboard!", "success")
    //title change
    // document.title = 'TextUtils - Copy'
  }
  const ClearText = ()=>{
    let ClearText = text.valueOf(null);
    setText(ClearText);
    let  NewText = ''
    setText(NewText)
    props.showAlert(" Clear Text!", "success")
    //title change
    // document.title = 'TextUtils - Clear Text!'
  }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>  
        <h3>{props.heading}</h3>  
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'? '#2b3043': 'white', color: props.mode==='dark'? 'white': 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>Convert to uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={CopyText}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={ClearText}>Clear Text</button>
    </div>
    <div className="containr my-3 px-5" style={{color: props.mode==='dark'? 'white': 'black'}}>
      <h2>your text summary</h2>
      {/* filter used for count only word not space */}
      {/* /\s/ used for split in to white spaces and new line when we use ' ' ony slpit in to space not split in to new line */}
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words {text.length} characters </p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p className='mx-3'>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
