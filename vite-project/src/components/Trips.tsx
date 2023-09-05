import { useEffect, useRef, useState, useContext } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


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



function Trips() {
    const [data, setData] = useState<Trip[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:3000/api/trips");
            const data2 = (await res.json()) as Trip[];
            setData(data2)
        }
        fetchData().catch(console.error);
    }, [])


    return (
        <>
            <Link to="/">Home </Link>
            <Link to="/Home/NewTripForm">New Trip</Link>
            {data.map((trip) =>
                <div key={trip.id}>
                    <h1>{trip.name}</h1>
                    <div>{trip.destination}</div>
                    <div>{trip.startDate} - {trip.endDate}</div>
                    <img src={trip.image} alt="img" width={"300px"} height={"200px"} />
                    <Link to={`/Home/Trips/${trip.id}`}>New Trip</Link>
                </div>
            )}

        </>
    )
}

export default Trips