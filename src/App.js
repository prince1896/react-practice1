
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode]= useState('light')
  const [btn,setBtn]=useState('Enable Dark mode')
  const [alert,setAlert]=useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode= ()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='grey'
      setBtn('Enable Light mode')
      showAlert("Dark mode is enabled","success")
      // document.title="TextUtils-Dark Mode"
      // setInterval(() => {
      //   document.title="TextUtils-is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils-Now"
      // }, 1500);

    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      setBtn('Enable Dark mode')
      showAlert("Light mode is enabled","success")
      // document.title="TextUtils-Light Mode"
    }
  }
  return (

<>
<Router>
<Navbar title='TextUtils' aboutText='About Us' mode={mode} btn={btn} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container">
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading='Enter the Text to Analyze' showAlert={showAlert}  mode={mode}/>
          </Route>
        </Switch>
  
  
</div>
</Router>
</>
  )
}

export default App;
