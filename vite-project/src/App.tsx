import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TripDetail from './components/TripDetail';
import Trips from './components/Trips';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import NewTripForm from './components/NewTripForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/UserRegistration" element={<UserRegistration/>} />
        <Route path="/Home/UserLogin" element={<UserLogin/>} />
        <Route path="/Home/Trips" element={<Trips/>} />
        <Route path="/Home/NewTripForm" element={<NewTripForm/>} />
        <Route path={`/Home/Trips/${id}`} element={<NewTripForm  key={"id"}/>} />
      </Routes>
    </Router>
  )
}

export default App