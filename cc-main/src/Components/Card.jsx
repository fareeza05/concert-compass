import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const API_KEY = import.meta.env.VITE_APP_CLIENT_ID;
const API_PASS = import.meta.env.VITE_APP_SECRET;


const Card = () => {


    const [currentDate, setCurrentDate] = useState(null);

    useEffect(() => {
        const updateDate = () => {
        const now = new Date();
        const formattedDate = now.toISOString().split('T')[0]; // Extract YYYY-MM-DD from ISO string
        setCurrentDate(formattedDate);
        };

        // Update the date every day
        const intervalId = setInterval(updateDate, 24 * 60 * 60 * 1000); // Update every 24 hours

        // Initial update
        updateDate();

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    console.log(currentDate)

    const [concerts, setConcerts] = useState(null);

    useEffect(() => {
        const fetchConcerts = async () => {
            console.log(import.meta.env.VITE_APP_CLIENT_ID);
            console.log(import.meta.env.VITE_APP_SECRET);
            const list = await fetch(`https://api.seatgeek.com/2/events?taxonomies.name=concert&sort=score.desc&datetime_utc.gte=${currentDate}&client_id=${API_KEY}&client_secret=${API_PASS}`);
            const listjson = await list.json();
            setConcerts(listjson);
            console.log(concerts)

        }

        fetchConcerts().catch(console.error)
    }, []);


    return(
        <>
        
        { concerts && concerts.events ? (
        <div className="card-container">
            <div className="card">
                <h3>{concerts.events[0].performers[0].name}</h3>
                <p>Today's Top Performer</p>
            </div>
            <div className="card">
                <h3>{concerts.events[0].performers[0].genres[0].name}</h3>
                <p>Today's Top Genre</p>
            </div>
            <div className="card">
                <h3>{concerts.events[0].venue.name}</h3>
                <p>Today's Top Venue</p>
            </div>
        </div>
        ) : null
    }
        </>
    );
};

export default Card;