import React from "react";
import {Link,useHistory}from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./navbar.css"



const Navbar=()=>{
    
    return(
        <nav>
          <div className="row fulltop">
            <div className="myInstalogo col-5  ">
              <Link to="/"className="">
                  <h3 className="mybrand-logo">Update Reapir Device</h3>
                </Link>
            </div>
          <div className="col-7 navarea">
              <ul id="nav-mobile" className="row right mynavitems">
                <li key="4"><Link to="/addItems"className="col-2 mynavitems">Add Items</Link></li>
                <li key="5"><Link to="/pushItems"className="col-2 mynavitems">Push Items</Link></li>
                <li key="6"><Link to="/removeItems"className="col-2 mynavitems">Remove Items</Link></li>
              </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;