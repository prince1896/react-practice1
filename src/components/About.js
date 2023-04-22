import React from 'react'

export default function  About(props) {
  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'grey':'white',
    border:'2px solid',
    borderColor:props.mode==='dark'?'white':'black'
  }
    // const[myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const[btnText,setBtnText]=useState('Enable Dark Mode')
    // const toggleStyle=()=>{
    //     if (myStyle.color==='black') {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
                
    //         })
    //         setBtnText('Enable dark  Mode')
    //     }
    // }
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-1' style={{color: props.mode==='dark'?'#042743':'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils give you a way to analyze your text quickly and efficiently, be it word count, character count or
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Free to use 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text.
       TextUtils reports the number of words and character. thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
         This word counter software works in any web browsers such as chrome, firefox, internet explorer, safari, opera. It
        suits to count characters in facebook, blogs, books, excel document, pdf document, essasys, etc.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
