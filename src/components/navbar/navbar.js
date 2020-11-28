import React, { useState,useEffect } from "react";
import {Link}from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./navbar.css"




const Navbar=()=>{
  const [logedInUser,setLogedInUser]=useState(false);
  useEffect(()=>{
    const existLoginuser=localStorage.getItem("amdinemail");
    if(existLoginuser==="amartya@gm.co"){
        setLogedInUser(true);
    }
  },[])

  const logout=()=>{
    localStorage.removeItem("amdinemail");
    setTimeout(()=>{
      window.location.reload();
    },1000);
  }
    
    return(
        <nav>
          <div className="row fulltop">
            <div className="myInstalogo col-5  ">
              <Link to="/"className="">
                  <h3 className="mybrand-logo">Update Reapir Device</h3>
                </Link>
            </div>
          <div className="col-7 navarea">
              {logedInUser==true?<ul id="nav-mobile" className="row right mynavitems">
                <li key="4"><Link to="/addItems"className="col-2 mynavitems">Add Items</Link></li>
                <li key="5"><Link to="/pushItems"className="col-2 mynavitems">Push Items</Link></li>
                <li key="6"><Link to="/removeItems"className="col-2 mynavitems">Remove Items</Link></li>
              
              <Button variant="contained" color="secondary"onClick={()=>logout()}>
                Log Out
              </Button>
              </ul>:null}
          </div>
        </div>
      </nav>
    )
}
export default Navbar;