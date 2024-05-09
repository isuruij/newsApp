import React, { useEffect, useState } from "react";
import { getNews } from "../../util/api";


function Navbar() {


  return (
    <div style={{position:"fixed",width:"100%",top:"0",zIndex:"10"}}>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MynewsApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"  
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Games
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
