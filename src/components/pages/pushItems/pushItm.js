import React, { useState,useEffect } from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";

const PushItem=(props)=>{
    const history=useHistory();

    const [color,setColor]=useState("");
    const [colorPushModel,setColorPushModel]=useState("");

    const [service1,setService1]=useState("");
    const [service2,setService2]=useState('');
    const [service3,setService3]=useState("");

    const [servicePushDevice,setServicePushDevice]=useState("");
    const [servicePushClass,setServicePushClass]=useState("");
    const [servicePushModel,setServicePushModel]=useState("");

    const [alert,setAlert]=useState(false);
    const [alertMessage,setAlertMessage]=useState("");
    const [success,setSuccess]=useState(false);
    const [successMessage,setSuccessMessage]=useState("");
    const [error,setError]=useState(false);
    const [errorMessage,setErrorMessage]=useState("");


    useEffect(()=>{
        const existLoginuser=localStorage.getItem("amdinemail");
        if(existLoginuser!=="amartya@gm.co"){
            history.push("/signIn");
        }
    },[])

    const pushColor=()=>{
        setSuccess(false);
        setError(false);
        setAlert(false);

        console.log(color);
        console.log(colorPushModel);
        if(colorPushModel===""){
            setAlert(true);
            setAlertMessage("please Add  Model Name")
        }else if(color===""){
            setAlert(true);
            setAlertMessage("please Add color Name")
        }else{
        fetch("/pushColor",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:color,
                parentModelName:colorPushModel
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.done===true){
                setSuccess(true);
                setSuccessMessage(result.msg);
            }else{
                setError(true);
                setErrorMessage(result.msg);
            }
        })
    }
    }
    const pushServiceToDevice=()=>{
        setSuccess(false);
        setError(false);
        setAlert(false);

        console.log(service1);
        console.log(servicePushDevice);
        if(servicePushDevice===""){
            setAlert(true);
            setAlertMessage("please Add Under Device Issue Name")
        }else if(service1===""){
            setAlert(true);
            setAlertMessage("please Add Issue Name")
        }else{
        fetch("/pushServiceToDevice",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:service1,
                parentDeviceName:servicePushDevice
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.done===true){
                setSuccess(true);
                setSuccessMessage(result.msg);
            }else{
                setError(true);
                setErrorMessage(result.msg);
            }
        })
    }
    }
    const pushServiceToClass=()=>{
        setSuccess(false);
        setError(false);
        setAlert(false);

        console.log(service2);
        console.log(servicePushClass);
        if(servicePushClass===""){
            setAlert(true);
            setAlertMessage("please Add Under Classification Issue Name")
        }else if(service2===""){
            setAlert(true);
            setAlertMessage("please Add Issue Name")
        }else{
        fetch("/pushServiceToClass",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:service2,
                parentClassName:servicePushClass
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.done===true){
                setSuccess(true);
                setSuccessMessage(result.msg);
            }else{
                setError(true);
                setErrorMessage(result.msg);
            }
        })
    }
    }
    const pushServiceToModel=()=>{
        setSuccess(false);
        setError(false);
        setAlert(false);

        setAlertMessage("")
        console.log(service3);
        console.log(servicePushModel);
        if(servicePushModel===""){
            setAlert(true);
            setAlertMessage("please Add Under Model Issue Name")
        }else if(service3===""){
            setAlert(true);
            setAlertMessage("please Add Issue Name")
        }else{
        fetch("/pushServiceToModel",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:service3,
                parentModelName:servicePushModel
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.done===true){
                setSuccess(true);
                setSuccessMessage(result.msg);
            }else{
                setError(true);
                setErrorMessage(result.msg);
            }
        })
    }
    }
    return(
        <div>
            <h2>Existing Color/Issue Push to another Item</h2>
            <div className="formArea">
            {alert? <Alert variant="filled"severity="warning">
                        {alertMessage}
                    </Alert>:null}
            {error? <Alert variant="filled"severity="error">
                        {errorMessage}
                    </Alert>:null}
            {success? <Alert variant="filled"severity="success">
                {successMessage}
            </Alert>:null}

                <div className="singleAdd">
                    <h3>1.Push Color Under Model</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Color Name"onChange={(e)=>setColor(e.target.value)} />
                            </Grid>
                            
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Name of the Model to Push"onChange={(e)=>setColorPushModel(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>pushColor()}>
                                    Push
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="singleAdd">
                    <h3 >2.Push Issue Under Device Type</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Issue Name"onChange={(e)=>setService1(e.target.value)} />
                            </Grid>
                            
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Device Type for Push"onChange={(e)=>setServicePushDevice(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>pushServiceToDevice()}>
                                    Push
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="singleAdd">
                    <h3 >3.Push Issue Under Classification</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Issue Name" onChange={(e)=>setService2(e.target.value)}/>
                            </Grid>
                            
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Classification for Push"onChange={(e)=>setServicePushClass(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>pushServiceToClass()}>
                                    Push
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="singleAdd">
                    <h3 >4.Push Issue Under Model</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Issue Name"onChange={(e)=>setService3(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Model for Push"onChange={(e)=>setServicePushModel(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>pushServiceToModel()}>
                                    Push
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PushItem;