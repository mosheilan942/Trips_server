import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function UserLogin() {
  const [data, setData] = useState()
  const myRefEmail = useRef(null)
  const myRefPassword = useRef(null)
  function hendleLogin() {
    const myHeaders = new Headers();
    myHeaders.append("authorization", "test-token");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": String(myRefEmail.current!.value),
      "password": String(myRefEmail.current!.value)
    });
    

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/api/auth/login", requestOptions)
      .then(response => response.json())
      .then(response => localStorage.setItem(`user`, response.responseObj.token))
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <Link to="/">Home </Link>
      <div>User Login</div>
      <input ref={myRefEmail} type="text" placeholder='Email' />
      <input ref={myRefPassword} type="text" placeholder='Password' />
      <button onClick={() => hendleLogin()}>Login</button>

    </>
  )
}

export default UserLogin