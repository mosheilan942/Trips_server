import React, { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function UserRegistration() {
  const myRefEmail = useRef(null)
  const myRefPassword = useRef(null)
  function hendleRegistration() {
    const myHeaders = new Headers();
    myHeaders.append("authorization", "test-token");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": String(myRefEmail.current!.value),
      "password": String(myRefEmail.current!.value)
    });
    console.log(raw);
    

    const requestOptions :RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/api/auth/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <Link to="/">Home </Link>
      <div>User Registration</div>
      <input ref={myRefEmail} type="text" placeholder='Email' />
      <input ref={myRefPassword} type="text" placeholder='Password' />
      <button onClick={() => hendleRegistration()}>Sign In</button>

    </>
  )
}

export default UserRegistration