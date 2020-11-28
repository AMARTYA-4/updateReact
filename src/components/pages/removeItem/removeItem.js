import React,{useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import "./removeitem.css";
import { useHistory } from "react-router-dom";
const RemoveItem=(props)=>{
    const history=useHistory();

    const [allDevice,setAllDevice]=useState("");
    const [classifications,setClassifications]=useState("");
    const [models,setModels]=useState("");
    const [colors,setColors]=useState("");

    const [pullingfromDevice,setpullingFromDevice]=useState(null);
    const [pullingFromClass,setpullingFromClass]=useState(null);
    const [pullingFromModel,setpullingFromModel]=useState(null);

    const [serviceOfDevice,setServiceOfDevice]=useState("");
    const [serviceOfClassification,setServiceOfClassification]=useState("");
    const [serviceOfModel,setServiceOfModel]=useState("");

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

    useEffect(()=>{
        fetch("/allDeviceTypes")
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            setAllDevice(result.categs);
        })
    },[])
    const onfetchSubClass=(itm)=>{
        setServiceOfClassification("");
        setServiceOfModel("");
        setModels("");
        setColors("");
        setpullingFromClass(null);
        setpullingFromModel(null);
        fetch("/ClassificationByDevice",{
            method:"post",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              name:itm.name
            })
          }).then((res)=>res.json())
          .then(result=>{
            console.log(result);
            setClassifications(result.categ.subClassifications);
            setpullingFromDevice(result.categ._id);
            setServiceOfDevice(result.categ.services!==null?result.categ.services:null);
          })
    }
    const onfetchSubModel=(itm)=>{
        setServiceOfModel("");
        setColors("");
        setpullingFromModel(null);
        fetch("/ModelByClassification",{
            method:"post",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              name:itm.name
            })
          }).then((res)=>res.json())
          .then(result=>{
            console.log(result);
            setModels(result.categ.subModels);
            setpullingFromClass(result.categ._id);
            setServiceOfClassification(result.categ.services!==null?result.categ.services:null);
          })
    }
    const onfetchSubColors=(itm)=>{
        fetch("/ColorByModel",{
            method:"post",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              name:itm.name
            })
          }).then((res)=>res.json())
          .then(result=>{
            console.log(result);
            setColors(result.categ.childColors);
            setpullingFromModel(result.categ._id);
            setServiceOfModel(result.categ.services!==null?result.categ.services:null);
          })
    }

    const onDeletingDevice=(itm)=>{
      console.log(itm);
      fetch("/deleteDevice",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          itemID:itm._id,
        })
      }).then(res=>res.json())
      .then(result=>{
        console.log(result);
        if(result.done===true){
          setSuccess(true);
          setSuccessMessage("Successfully Deleted Device Type");
          window.location.reload();
        }else{
          window.location.reload();
        }
        // window.location.reload();
      })
      setTimeout(()=>{
        window.location.reload();
      },2000);
    }
    const onDeletingSubClass=(itm)=>{
      console.log(pullingFromModel);
      console.log(pullingFromClass);
      console.log(pullingfromDevice);
      console.log(itm);
      fetch("/deleteClassification",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          item:itm,
          parentDevice:pullingfromDevice
        })
      }).then(res=>res.json())
      .then(result=>{
        console.log(result);
        if(result.done===true){
          setSuccess(true);
          setSuccessMessage("Successfully Deleted Device Type");
          window.location.reload();
        }else{
          window.location.reload();
        }
        window.location.reload();
      });
      setTimeout(()=>{
        window.location.reload();
      },2000);
    }
    const onDeletingSubModel=(itm)=>{
      console.log(pullingFromModel);
      console.log(pullingFromClass);
      console.log(pullingfromDevice);
      console.log(itm);
      fetch("/deleteModel",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          item:itm,
          parentClass:pullingFromClass
        })
      }).then(res=>res.json())
      .then(result=>{
        console.log(result);
        if(result.done===true){
          setSuccess(true);
          setSuccessMessage("Successfully Deleted Device Type");
          window.location.reload();
        }else{
          window.location.reload();
        }
        window.location.reload();
      })
      setTimeout(()=>{
        window.location.reload();
      },2000);
    }
    const onDeletingChildColor=(itm)=>{
      console.log(pullingFromModel);
      console.log(pullingFromClass);
      console.log(pullingfromDevice);
      console.log(itm);
      fetch("/pullColor",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          item:itm,
          parentModel:pullingFromModel
        })
      }).then(res=>res.json())
      .then(result=>{
        console.log(result);
        if(result.done===true){
          setSuccess(true);
          setSuccessMessage("Successfully Deleted Device Type");
          window.location.reload();
        }else{
          window.location.reload();
        }
        window.location.reload();
      })
      setTimeout(()=>{
        window.location.reload();
      },2000);
    }
    const onDeletingChildservice=(itm)=>{
      console.log(pullingFromModel);
      console.log(pullingFromClass);
      console.log(pullingfromDevice);
      console.log(itm);
      fetch("/pullService",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          item:itm,
          parentModel:pullingFromModel,
          parentClass:pullingFromClass,
          parentDevice:pullingfromDevice
        })
      }).then(res=>res.json())
      .then(result=>{
        console.log(result);
        if(result.done===true){
          setSuccess(true);
          setSuccessMessage("Successfully Deleted Device Type");
          window.location.reload();
        }else{
          window.location.reload();
        }
        window.location.reload();
      })
      setTimeout(()=>{
        window.location.reload();
      },2000);
    }

    return(
        <div>
            <h2>RemoveItem Page</h2>
            <div className="removeformArea">
            {success? <Alert variant="filled"severity="success">
                        {successMessage}
                    </Alert>:null}
                <div className="row removeformArea">
                    <div className="col">
                      <h3>ALL DEVICE TYPES</h3>
                      <div className="areaVis">
                        {allDevice?allDevice.map((item,index)=>{
                        return(<div key={index}>
                            <ul>
                                <li className="row">
                                  <h4 onClick={()=>onfetchSubClass(item)}className="col-7">{item.name}<ArrowRightIcon/></h4>
                                  <button onClick={()=>onDeletingDevice(item)} className="col-4">Delete</button>
                                </li>
                                </ul>
                                </div>
                                
                                )
                        }):null}
                        </div>
                    </div>
                    <div className="col">
                    <h3>CLASSIFICATION</h3>
                    <div className="areaVis">
                        {classifications?classifications.map((item,index)=>{
                        return(<div key={index}>
                            <ul>
                                <li className="row">
                                  <h4 onClick={()=>onfetchSubModel(item)}className="col-7">{item.name}<ArrowRightIcon/></h4>
                                  <button onClick={()=>onDeletingSubClass(item)}className="col-4">Delete</button>
                                </li>
                                </ul>
                                </div>
                                
                                )
                        }):null}
                        </div>
                    </div>
                    <div className="col">
                    <h3>MODEL</h3>
                    <div className="areaVis">
                        {models?models.map((item,index)=>{
                        return(<div key={index}>
                            <ul>
                                <li className="row">
                                  <h4 onClick={()=>onfetchSubColors(item)}className="col-7">{item.name}<ArrowRightIcon/></h4>
                                  <button onClick={()=>onDeletingSubModel(item)} className="col-4">Delete</button>
                                </li>
                                </ul>
                                </div>
                                
                                )
                        }):null}
                        </div>
                    </div>
                    <div className="col">
                    <h3>COLOR</h3>
                    <div className="areaVis">
                        {colors?colors.map((item,index)=>{
                        return(<div key={index}>
                            <ul>
                                <li className="row">
                                  <h4 className="col-7">{item.name}</h4>
                                  <button onClick={()=>onDeletingChildColor(item)}className="col-4">Delete</button>
                                </li>
                                </ul>
                                </div>
                                
                                )
                        }):null}
                        </div>
                    </div>
                    <div className="col">
                    <h3>ISSUES</h3>
                    <div className="areaVis">
                        {serviceOfDevice?serviceOfDevice.map((item,index)=>{
                        return(<div key={index}>
                            <ul>
                            <li className="row">
                                  <h4 className="col-7">{item.name}</h4>
                                  <button onClick={()=>onDeletingChildservice(item)}className="col-4">Delete</button>
                                </li>
                                </ul>
                                </div>
                                
                                )
                        }):null}
                        {serviceOfClassification?serviceOfClassification.map((item,index)=>{
                        return(<div key={index}>
                            <ul>
                            <li className="row">
                                  <h4 className="col-7">{item.name}</h4>
                                  <button onClick={()=>onDeletingChildservice(item)}className="col-4">Delete</button>
                                </li>
                                </ul>
                                </div>
                                
                                )
                        }):null}
                        {serviceOfModel?serviceOfModel.map((item,index)=>{
                        return(<div key={index}>
                            <ul>
                            <li className="row">
                                  <h4 className="col-7">{item.name}</h4>
                                  <button onClick={()=>onDeletingChildservice(item)}className="col-4">Delete</button>
                                </li>
                                </ul>
                                </div>
                                
                                )
                        }):null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemoveItem;