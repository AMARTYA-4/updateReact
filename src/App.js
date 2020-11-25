import React from "react";
import {BrowserRouter,Route, Switch,Redirect}from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/navbar";
import AddItem from "./components/pages/addItem/additem";
import PushItem from "./components/pages/pushItems/pushItm";
import RemoveItem from "./components/pages/removeItem/removeItem";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar/>

        <Switch>
        <Route
          exact
          path={`/addItems`}
          component={AddItem} 
          />
        <Route
          exact
          path={`/pushItems`}
          component={PushItem}
        /> 
        <Route
          exact
          path={`/removeItems`}
          component={RemoveItem}
        /> 
        <Redirect from="/" to='addItems' /> 
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
