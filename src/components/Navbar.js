import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
        </li>
        

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 mx-1" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
      <div className={`custom-control custom-switch mx-2 text-${props.mode==='dark'?'light':'dark'}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
  <label className="custom-control-label" htmlFor="customSwitch1">{props.btn}</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps={
  title:'Set Title Here',
  aboutText: 'Set About Us Here'
}
