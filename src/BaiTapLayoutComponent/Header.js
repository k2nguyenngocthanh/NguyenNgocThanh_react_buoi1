import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
<div classname="container px-lg-5">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
            </ul>  
            </form>
        </div>
            </div>
        </nav>


</div>











    )
  }
}
