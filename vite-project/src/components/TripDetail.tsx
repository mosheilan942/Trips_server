import React, { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

type Trip = {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
  id: string;
}


function TripDetail() {
  const [data, setData] = useState({});
  const { userId } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/trips/${userId}`);
      const data2 = (await res.json());
      setData(data2)
     
    }
    fetchData().catch(console.error);
  }, [userId])
  if (data) {
    const arr = Object.entries(data).map(([key, value], index) => (
      <div key={index}>
      {key === 'image' ? (
        <img src={String(value)} alt="Image" width={"300px"} height={"200px"} />
      ) : (
        <div>
          {key}: {`${value}`}
        </div>
      )}
    </div>
    ));
  
  return (
    <>
      <Link to="/Home/Trips">Trips </Link>
      <div>TripDetail</div>
      <div>{arr}</div>
    </>
  )
}}

export default TripDetail


