import React, { useState,useEffect} from "react";
import {useHistory}from "react-router-dom"
import "./additem.css";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { json } from "body-parser";

const AddItem=(props)=>{
    const history=useHistory();

    const [alert,setAlert]=useState(false);
    const [alertMessage,setAlertMessage]=useState("");
    const [success,setSuccess]=useState(false);
    const [successMessage,setSuccessMessage]=useState("");
    const [error,setError]=useState(false);
    const [errorMessage,setErrorMessage]=useState("");

    const [deviceType,setDeviceType]=useState("");
    const [devicePicture,setDevicePicture]=useState("");

    const [classification,setClassification]=useState("");
    const [classificationPicture,setClasificationPicture]=useState("");
    const [parentDevice,setParentDevice]=useState("");

    const [model,setModel]=useState("");
    const [modelPicture,setModelPicture]=useState("");
    const [parentClassification,setParentClassification]=useState("");

    const [color,setColor]=useState("");
    const [colorPicture,setColorlPicture]=useState("");
    const [parentModel,setParentModel]=useState("");

    //....#####....Issues Starts....######.......##########

    const [issue1,setIssue1]=useState("");
    const [issue1Picture,setissue1Picture]=useState("");
    const [possibleIssue1,setPossibleIssue1]=useState("");
    const [possibleIssue2,setPossibleIssue2]=useState("");
    const [possibleIssue3,setPossibleIssue3]=useState("");
    const [possibleIssue4,setPossibleIssue4]=useState("");
    const [possibleIssue5,setPossibleIssue5]=useState("");
    const [parentDeviceissue,setParentDeviceissue]=useState("");

    const [issue2,setIssue2]=useState("");
    const [issue2Picture,setissue2Picture]=useState("");
    const [possibleIssue6,setPossibleIssue6]=useState("");
    const [possibleIssue7,setPossibleIssue7]=useState("");
    const [possibleIssue8,setPossibleIssue8]=useState("");
    const [possibleIssue9,setPossibleIssue9]=useState("");
    const [possibleIssue10,setPossibleIssue10]=useState("");
    const [parentClassificationissue,setParentClassificationissue]=useState("");

    const [issue3,setIssue3]=useState("");
    const [issue3Picture,setissue3Picture]=useState("");
    const [possibleIssue11,setPossibleIssue11]=useState("");
    const [possibleIssue12,setPossibleIssue12]=useState("");
    const [possibleIssue13,setPossibleIssue13]=useState("");
    const [possibleIssue14,setPossibleIssue14]=useState("");
    const [possibleIssue15,setPossibleIssue15]=useState("");
    const [parentModelissue,setParentModelissue]=useState("");

    useEffect(()=>{
        const existLoginuser=localStorage.getItem("amdinemail");
        if(existLoginuser!=="amartya@gm.co"){
            history.push("/signIn");
        }
    },[])

    const deviceAdd=()=>{
        setAlert(false);
        setSuccess(false);
        setError(false);
        if(deviceType===""){
            setAlert(true);
            setAlertMessage("please Add Device-Type Name")
        }else{
            console.log(deviceType);
            console.log(devicePicture);
            fetch("/addDevice",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:deviceType,
                    picture:devicePicture
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

    const classificationAdd=()=>{
        setAlert(false);
        setSuccess(false);
        setError(false);
        if(parentDevice===""){
         setAlert(true);
         setAlertMessage("please Add Parent Device-Type Name")
        }else if(classification===""){
            setAlert(true);
            setAlertMessage("please Add Classification Name")
        }else{
            console.log(classification);
            console.log(classificationPicture);
            console.log(parentDevice);
            fetch("/addClassification",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:classification,
                    picture:classificationPicture,
                    parentDeviceName:parentDevice
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
    const modelAdd=()=>{
        setAlert(false);
        setSuccess(false);
        setError(false);
        if(parentClassification===""){
            setAlert(true);
            setAlertMessage("please Add Parent Classification Name")
        }else if(model===""){
            setAlert(true);
            setAlertMessage("please Add Model Name")
        }else{
            console.log(model);
            console.log(modelPicture);
            console.log(parentClassification);
            fetch("/addModel",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:model,
                    picture:modelPicture,
                    parentClassificationName:parentClassification
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
    const colorAdd=()=>{
        setAlert(false);
        setSuccess(false);
        setError(false);
        if(parentModel===""){
            setAlert(true);
            setAlertMessage("please Add Parent Model Name")
        }else if(color===""){
            setAlert(true);
            setAlertMessage("please Add Color Name")
        }else{
            console.log(color);
            console.log(colorPicture);
            console.log(parentModel);
            fetch("/addColor",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:color,
                    picture:colorPicture,
                    parentModelName:parentModel
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

    let finalDeviceIssue=[];
    const DeviceIssue=()=>{
        if(possibleIssue1!=="")finalDeviceIssue.push(possibleIssue1);
        if(possibleIssue2!=="")finalDeviceIssue.push(possibleIssue2);
        if(possibleIssue3!=="")finalDeviceIssue.push(possibleIssue3);
        if(possibleIssue4!=="")finalDeviceIssue.push(possibleIssue4);
        if(possibleIssue5!=="")finalDeviceIssue.push(possibleIssue5);
    }
    const issueUnderDevice=()=>{
        setAlert(false);
        setSuccess(false);
        setError(false);
        DeviceIssue();
        if(parentDeviceissue===""){
            setAlert(true);
            setAlertMessage("please Add Under Device-Type Name")
        }else if(issue1===""){
            setAlert(true);
            setAlertMessage("please Add Issue Name")
        }else{
        setTimeout(()=>{
            console.log(issue1);
            console.log(issue1Picture);
            console.log(parentDeviceissue);
            console.log(finalDeviceIssue);
            fetch("/addServiceToDevice",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:issue1,
                    picture:issue1Picture,
                    parentName:parentDeviceissue,
                    possibleissues:finalDeviceIssue
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
        },2000)
        }
        
    }


    let finalClassificationIssue=[];
    const classificationIssue=()=>{
        if(possibleIssue6!=="")finalClassificationIssue.push(possibleIssue6);
        if(possibleIssue7!=="")finalClassificationIssue.push(possibleIssue7);
        if(possibleIssue8!=="")finalClassificationIssue.push(possibleIssue8);
        if(possibleIssue9!=="")finalClassificationIssue.push(possibleIssue9);
        if(possibleIssue10!=="")finalClassificationIssue.push(possibleIssue10);
    }
    const issueUnderClassification=()=>{
        setAlert(false);
        setSuccess(false);
        setError(false);
        classificationIssue();
        if(parentClassificationissue===""){
            setAlert(true);
            setAlertMessage("please Add Under Classification Name")
        }else if(issue2===""){
            setAlert(true);
            setAlertMessage("please Add Issue Name")
        }else{
        setTimeout(()=>{
            console.log(issue2);
            console.log(issue2Picture);
            console.log(parentClassificationissue);
            console.log(finalClassificationIssue);
            fetch("/addServiceToClassification",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:issue2,
                    picture:issue2Picture,
                    parentName:parentClassificationissue,
                    possibleissues:finalClassificationIssue
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
        },2000)
        }
        
    }


    let finalmodelIssue=[];
    const modelIssue=()=>{
        if(possibleIssue11!=="")finalmodelIssue.push(possibleIssue11);
        if(possibleIssue12!=="")finalmodelIssue.push(possibleIssue12);
        if(possibleIssue13!=="")finalmodelIssue.push(possibleIssue13);
        if(possibleIssue14!=="")finalmodelIssue.push(possibleIssue14);
        if(possibleIssue15!=="")finalmodelIssue.push(possibleIssue15);
    }
    const issueUnderModel=()=>{
        setAlert(false);
        setSuccess(false);
        setError(false);
        modelIssue();
        if(parentModelissue===""){
            setAlert(true);
            setAlertMessage("please Add Under Model Issue Name")
        }else if(issue3===""){
            setAlert(true);
            setAlertMessage("please Add Issue Name")
        }else{
        setTimeout(()=>{
            console.log(issue3);
            console.log(issue3Picture);
            console.log(parentModelissue);
            console.log(finalmodelIssue);
            fetch("/addServiceToModel",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:issue3,
                    picture:issue3Picture,
                    parentName:parentModelissue,
                    possibleissues:finalmodelIssue
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
        },2000)
        }
    }

    return(
        <div>
            <h2>AddItem To Any Area</h2>
            <div className="formArea">
                <div className="singleAdd">
                    <div className="floatToast">
                    {alert? <Alert variant="filled"severity="warning">
                        {alertMessage}
                    </Alert>:null}
                    {error? <Alert variant="filled"severity="error">
                        {errorMessage}
                    </Alert>:null}
                    {success? <Alert variant="filled"severity="success">
                        {successMessage}
                    </Alert>:null}
                    </div>
                    <h3>1.Add Item To Device Type</h3>
                    
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Device Type Name"onChange={(e)=>setDeviceType(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Device Type Picture Name"onChange={(e)=>setDevicePicture(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>deviceAdd()}>
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="singleAdd">
                    <h3>2.Add Item To Classification</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Classification Name"onChange={(e)=>setClassification(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Classification Picture"onChange={(e)=>setClasificationPicture(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Parent Device Type"onChange={(e)=>setParentDevice(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>classificationAdd()}>
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="singleAdd">
                    <h3>3.Add Item To Model</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Model Name"onChange={(e)=>setModel(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Model picture" onChange={(e)=>setModelPicture(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Parent Classification"onChange={(e)=>setParentClassification(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>modelAdd()}>
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="singleAdd">
                    <h3>4.Add Item To Color</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Color Name" onChange={(e)=>setColor(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Color Picture"onChange={(e)=>setColorlPicture(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Parent Model" onChange={(e)=>setParentModel(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>colorAdd()}>
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="singleAdd">
                    <h3 >5.Add Item To Issue Under Device Type</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Issue Name"onChange={(e)=>setIssue1(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Issue Picture"onChange={(e)=>setissue1Picture(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 1"onChange={(e)=>setPossibleIssue1(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 2"onChange={(e)=>setPossibleIssue2(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 3"onChange={(e)=>setPossibleIssue3(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 4"onChange={(e)=>setPossibleIssue4(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 5"onChange={(e)=>setPossibleIssue5(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Under Device Type"onChange={(e)=>setParentDeviceissue(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>issueUnderDevice()}>
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="singleAdd">
                    <h3 >5.Add Item To Issue Under Classification</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Issue Name"onChange={(e)=>setIssue2(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Issue Picture" onChange={(e)=>setissue2Picture(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 1" onChange={(e)=>setPossibleIssue6(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 2" onChange={(e)=>setPossibleIssue7(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 3" onChange={(e)=>setPossibleIssue8(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 4"onChange={(e)=>setPossibleIssue9(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 5" onChange={(e)=>setPossibleIssue10(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Under Classification"onChange={(e)=>setParentClassificationissue(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>issueUnderClassification()}>
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="singleAdd">
                    <h3 >5.Add Item To Issue Under Models</h3>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Issue Name"onChange={(e)=>setIssue3(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Issue Picture"onChange={(e)=>setissue3Picture(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 1"onChange={(e)=>setPossibleIssue11(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 2"onChange={(e)=>setPossibleIssue12(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 3"onChange={(e)=>setPossibleIssue13(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 4" onChange={(e)=>setPossibleIssue14(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Possible Issues 5"onChange={(e)=>setPossibleIssue15(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Under Model"onChange={(e)=>setParentModelissue(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"onClick={()=>issueUnderModel()}>
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem;