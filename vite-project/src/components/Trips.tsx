import { useEffect, useRef, useState, useContext } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import '../styles.css';

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



const requestOptions: RequestInit = {
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


    // const cardStyles = {
    //     container: {
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "space-between",
    //       height: "350px",
    //       width: "300px",
    //       boxShadow: "0 0 3px 2px #cec7c759",
    //       borderRadius: "10px",
    //       margin: "20px",
    //       padding: "20px",
    //       backgroundColor: "#fff",
    //       transition: "box-shadow 0.3s ease-in-out",
    //     },
    //     header: {
    //       fontSize: "20px",
    //       fontWeight: "bold",
    //       marginBottom: "10px",
    //     },
    //     location: {
    //       fontSize: "16px",
    //       marginBottom: "10px",
    //     },
    //     date: {
    //       fontSize: "14px",
    //       marginBottom: "10px",
    //     },
    //     image: {
    //       width: "100%",
    //       height: "150px",
    //       objectFit: "cover",
    //       borderRadius: "5px",
    //     },
    //     links: {
    //       marginTop: "10px",
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //     },
    //     button: {
    //       padding: "10px 20px",
    //       backgroundColor: "red",
    //       color: "#fff",
    //       border: "none",
    //       borderRadius: "5px",
    //       cursor: "pointer",
    //     },
    //   };

    return (
        // <>
        //     <Link to="/">Home </Link>
        //     <Link to="/Home/NewTripForm">New Trip </Link>
        //     {data.map((trip) =>

        //         <div key={trip.id} >
        //             <h1>{trip.name}</h1>
        //             <div>{trip.destination}</div>
        //             <div>{trip.startDate} - {trip.endDate}</div>
        //             <img src={trip.image} alt="img" width={"300px"} height={"200px"} />
        //             <Link to={`/Home/Trips/${trip.id}`}>Trip Detail </Link>
        //             <Link to={`/Home/Trips/Update/${trip.id}`}>Update Trip </Link>
        //             <button onClick={() => hendleDelete(trip.id)}>Delete </button>
        //         </div>
        //     )}

        // </>
        <>
            <div className="content-wrapper">
                <div className="navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/Home/NewTripForm" className="nav-link">New Trip</Link>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>

                    {data.map((trip) => (
                        <div key={trip.id} className="card-container">
                            <h1 className="card-header">{trip.name}</h1>
                            <div className="card-location">{trip.destination}</div>
                            <div className="card-date">
                                {trip.startDate} - {trip.endDate}
                            </div>
                            <img
                                src={trip.image}
                                className="card-image"
                                alt={trip.name}
                            />
                            <div className="card-links">
                                <Link to={`/Home/Trips/${trip.id}`} className='card-button1'>Trip Detail</Link>
                                <Link to={`/Home/Trips/Update/${trip.id}`} className='card-button1'>Update Trip</Link>
                                <button
                                    className="card-button"
                                    onClick={() => hendleDelete(trip.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Trips