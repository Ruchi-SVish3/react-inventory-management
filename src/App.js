import React from "react";
import Signup from "./Autentication/Signup";
import Login from "./Autentication/Login";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import Auth from "./Autentication/Auth";
import Product from "./components/Product";
import Customers from "./components/Customers";
import Order from "./components/Order";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path = '/' element= {<Home/>}/>
        <Route exact path="/login"   element = {<Login/>}/>
        <Route path="/signup"   element = {<Signup/>}/>
        <Route path="/dashboard"   element = {<Auth><Dashboard/></Auth>}/>
        <Route path="/user"   element = {<Auth><User/></Auth>}/>
        <Route path="/product"   element = {<Auth><Product/></Auth>}/>
        <Route path="/order"   element = {<Auth><Order/></Auth>}/>
        <Route path="/customer"   element = {<Auth><Customers/></Auth>}/>
       
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
