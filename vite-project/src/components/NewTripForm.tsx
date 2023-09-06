import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

type Trip = {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string | string[];
  id: string;
}


function NewTripForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState("");
  const [newdata, setData] = useState<Trip>();

  const onSubmit = (data) => {
    setIsLoading(true);
    setData(data)
    // console.log("newdata:", newdata!.activities);
    console.log("newdata:", data!.activities);
    const arr: string[] = String(data!.activities).split(",")
    data.activities = arr
    const myHeaders = new Headers();
    if (window.localStorage !== undefined) {
      const data = window.localStorage.getItem('user');
      data !== null ? setUser((user)) : null;
      console.log(user);
      
    }
    myHeaders.append("authorization", `${user}`);
    myHeaders.append("Content-Type", "application/json");
    // console.log(JSON.stringify(data));



    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: 'follow'
    };

    fetch("http://localhost:3000/api/trips", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log("result:", result)
        setIsLoading(false)
      })
      .catch(() => {
        setErrorMessage("Unable to fetch New Trip")
        setIsLoading(false)
      });

  }
  if (isLoading) {
    return <div>Loading....</div>
  }
  else {
    return (
      <>
        <Link to="/Home/Trips">Trips </Link>
        <h1>Add New Trip</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col justify-evenly"
        >
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="Name"
            {...register("name")}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="destination"
            {...register("destination")}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="startDate"
            {...register("startDate")}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="endDate"
            {...register("endDate")}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="description"
            {...register("description")}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="price"
            {...register("price")}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="image"
            {...register("image")}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="activities"
            {...register("activities")}
          />
          <button disabled={isLoading}
            className=" flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
            type='submit'
          >
            <span>
              Submit
            </span>
          </button>
        </form>
        {/* <div>Data:</div> */}
      </>
    )
  }}

  export default NewTripForm