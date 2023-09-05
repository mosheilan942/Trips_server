import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function NewTripForm() {
  return (
    <>
    <Link to="/Home/Trips">Trips </Link>
    <div>NewTripForm</div>
    </>
  )
}

export default NewTripForm