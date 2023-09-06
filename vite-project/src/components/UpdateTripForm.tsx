import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
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

function UpdateTripForm() {
    const [data, setData] = useState<Trip | null>();
    const { register, handleSubmit } = useForm();
    const { userId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/api/trips/${userId}`);
            const data2 = (await res.json());
            setData(data2)
            // console.log(data2.startDate);

        }

        fetchData().catch(console.error);
    }, [userId])


    const onSubmit = (newData) => {
        Object.entries(newData).map(([kay, value], index) => value === "" ? newData[kay] = data[kay] : null);
        setData(newData)
        const arr: string[] = String(newData.activities).split(",")
        newData!.activities = arr
        const myHeaders = new Headers();
        myHeaders.append("authorization", "test-token");
        myHeaders.append("Content-Type", "application/json");

        const requestOptions: RequestInit = {
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify(newData),
            redirect: 'follow'
        };

        fetch(`http://localhost:3000/api/trips/${userId}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log("result:", result))
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <Link to="/Home/Trips">Trips </Link>
            <h1>Update Trip Form</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    placeholder="name"
                    defaultValue={data?.name}
                    {...register("name")}
                />
                <input
                    placeholder="destination"
                    defaultValue={data?.destination}
                    {...register("destination")}
                />
                <input
                    placeholder="startDate"
                    defaultValue={data?.startDate}
                    {...register("startDate")}
                />
                <input
                    placeholder="endDate"
                    defaultValue={data?.endDate}
                    {...register("endDate")}
                />
                <input
                    placeholder="description"
                    defaultValue={data?.description}
                    {...register("description")}
                />
                <input
                    placeholder="price"
                    defaultValue={data?.price}
                    {...register("price")}
                />
                <input
                    placeholder="image"
                    defaultValue={data?.image}
                    {...register("image")}
                />
                <input
                    placeholder="activities"
                    defaultValue={data?.activities}
                    {...register("activities")}
                />
                <button
                    className=" flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
                    type='submit'
                >
                    <span>
                        Submit
                    </span>
                </button>
            </form>
        </>
    )
}

export default UpdateTripForm