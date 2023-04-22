import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpCase=()=>{
   let newText= text.toUpperCase()
   setText(newText)
   props.showAlert("converted to Uppercase","success")
  }
  const handleLoCase=()=>{
    let newText= text.toLowerCase()
    setText(newText)
    props.showAlert("converted to Lower Case","success")
   }
   const handleCapitalize=()=>{
    let newText= text.replace(/\b\w/g, text => text.toUpperCase())
    setText(newText)
    props.showAlert("converted to Capitalize","success");
   }
   const handleClear=()=>{
    let newText=''
    setText(newText)
    props.showAlert("Clipboard is Cleared","success");
   }
   const handleOnchange=(event)=>{

    setText(event.target.value)
   }
   const handleCopy=()=>{
   
    navigator.clipboard.writeText(text);
    props.showAlert("Copied!","success");
   }
   const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Extra Spaces is removed","success");
   }
  const[text,setText]=useState('')
  return (
    <>
       <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
      <h1 className='mb-3'>{props.heading}</h1>
     <div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#8e8b8b':'white',
color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-1 " onClick={handleUpCase}>Convert to UpperCase</button>
<button type="button" disabled={text.length===0} className="btn btn-secondary mx-1" onClick={handleLoCase}>Convert to LowerCase</button>
<button type="button" disabled={text.length===0} className="btn btn-success mx-1" onClick={handleCapitalize}>Capitalize</button>
<button type="button" disabled={text.length===0} className="btn btn-danger mx-1" onClick={handleClear}>Clear</button> 
<button type="button" disabled={text.length===0} className="btn btn-danger mx-1" onClick={handleCopy}>CopyText</button> 
<button type="button" disabled={text.length===0} className="btn btn-danger mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
      <p>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to Preview !'}</p>
    </div>
    </>
 
  )
}
