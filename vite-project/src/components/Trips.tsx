import { useEffect, useRef, useState, useContext } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';


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

const myHeaders = new Headers();
    myHeaders.append("authorization", "test-token");

    

    const requestOptions:RequestInit =  {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };


function Trips() {
    const [status, setStatus] = useState<boolean>(false)
    const [data, setData] = useState<Trip[]>([]);
    const { userId } = useParams();

    function hendleDelete(id: string) {
        setStatus(true)
        fetch(`http://localhost:3000/api/trips/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:3000/api/trips");
            const data2 = (await res.json()) as Trip[];
            setData(data2)
            setStatus(false)
        }
        fetchData().catch(console.error);
    }, [status])


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
                    <Link to={`/Home/Trips/${trip.id}`}>Trip Detail</Link>
                    <Link to={`/Home/Trips/Update/${trip.id}`}>Update Trip</Link>
                    <button onClick={() => hendleDelete(trip.id)}>Delete</button>
                </div>
            )}

        </>
    )
}

export default Trips