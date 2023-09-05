import React, {useState} from 'react'
import Trips from './Trips';
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
import AppRoute from "../routers/appRoute";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Home() {


  return (
    <>
    <Link to="/Home/Trips">Trips </Link>
    <Link to="/Home/UserRegistration">Register </Link>
    <Link to="/Home/UserLogin">Login </Link>
    <h2>Home View</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </>
  )
}

export default Home



