import React, { useEffect, useState } from 'react';
import {useHistory}from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import "./signIn.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});

export default function SignIn() {
  const history=useHistory();
  const classes = useStyles();
  const [visible,setVisible]=useState(false);

  const [email,setEmail]=useState("");
  const [passWord,setPassword]=useState("");

  const [success,setSuccess]=useState(false);
  const [successMessage,setSuccessMessage]=useState("")
  const [error,setError]=useState(false);
  const [errorMessage,setErrorMessage]=useState("");

  useEffect(()=>{
    const existLoginuser=localStorage.getItem("amdinemail");
    if(existLoginuser==="amartya@gm.co"){
        history.push("/");
    }
  },[])
  const login=()=>{
    setError(false);
      if(email==="amartya@gm.co"& passWord==="1234"){
          localStorage.setItem("amdinemail",email);
          console.log("successfully login");
          setSuccess(true);
          setSuccessMessage("SuccessFully Login");
          setTimeout(()=>{
            window.location.reload();
            history.push("/");
          },2000);
      }else{
          console.log("not Match");
          setError(true);
          setErrorMessage("Invalid Email or Password");
      }
  }


  return (
    <Card className={classes.root} variant="outlined">
        <div className="floatToast">
                    {error? <Alert variant="filled"severity="error">
                        {errorMessage}
                    </Alert>:null}
                    {success? <Alert variant="filled"severity="success">
                        {successMessage}
                    </Alert>:null}
         </div>
        <div className="row passInput"style={{width:"348px"}}>
            <TextField className="passInput"id="standard-basic"style={{width:"320px"}} label="Your email"onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="row passInput"style={{width:"348px"}}>
            <div className="col-10">
            <TextField style={{width:"285px"}}id="standard-basic"type={visible?"text":"password"} label="Your Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="col-2">
                {visible?<VisibilityIcon onClick={()=>setVisible(false)}/>:<VisibilityOffIcon onClick={()=>setVisible(true)}/>}
            </div>
            <Button variant="contained"className="passInput"color="primary"onClick={()=>login()}>
                Login
            </Button>
        </div>
       
    </Card>
  );
}