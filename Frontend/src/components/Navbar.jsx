import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <a className="navbar-brand" href="#">MkStore</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto ms-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/course">Course</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <Link className="nav-link" to="/login"> 
       <button className="btn btn-primary" onClick={()=>document.getElementById('Login').showModal()}>
       Login</button></Link>

    </div>
      </div>

  </nav>
    </>
  );
};

export default Navbar;
