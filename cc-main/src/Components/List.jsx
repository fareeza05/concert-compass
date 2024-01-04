import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const API_KEY = import.meta.env.VITE_APP_CLIENT_ID;
const API_PASS = import.meta.env.VITE_APP_SECRET;

const List = () => {

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

    

    const [concerts, setConcerts] = useState(null);

    useEffect(() => {
        const fetchConcerts = async () => {
            console.log(import.meta.env.VITE_APP_CLIENT_ID);
            console.log(import.meta.env.VITE_APP_SECRET);
            const list = await fetch(`https://api.seatgeek.com/2/events?taxonomies.name=concert&sort=score.desc&datetime_utc.gte=${currentDate}&client_id=${API_KEY}&client_secret=${API_PASS}`);
            const listjson = await list.json();
            setConcerts(listjson);

        }

        fetchConcerts().catch(console.error)
    }, []);

  
    const dateTime = (datetimestring) => {
            const date = new Date(datetimestring);
            const formattedDate = date.toLocaleDateString('default', {
                month:'long',
                day:'numeric',
                year:'numeric'
            });

            const formattedTime = date.toLocaleTimeString('en-US', {
                hour:'numeric',
                minute:'2-digit'
            });

            return `${formattedDate} at ${formattedTime}`
    }



    return(
        <div>
            <div className="list-container">
                <div className='search-filter'>
                <input type="text" placeholder='Enter Date or Artist...' className='search-bar'/>
                <input type="text" placeholder='Enter Date or Artist...' className='search-bar'/>
                </div>
                <ul>
                    <h1>Concerts</h1>
                    {concerts && concerts.events && concerts.events.map((event) => (
                        <li key={event.id}>
                            <h2>{event.title}</h2>
                            <div className="info">
                                <div>
                                <img height='200px' width='200px' src={event.performers[0].image} />
                                </div>
                                <div className="info2">
                                <p>{dateTime(event.datetime_local)}</p>
                                <p>{event.venue.name}</p>
                                <p>{event.venue.address}, {event.venue.extended_address}</p>
                                <a href={event.url}>Get Tickets</a>
                                </div>
                                
                            </div>
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default List;