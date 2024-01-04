import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const API_KEY = import.meta.env.VITE_APP_CLIENT_ID;
const API_PASS = import.meta.env.VITE_APP_SECRET;


const Card = () => {

    const [genres, setGenres] = useState(null);

    useEffect(() => {
        const fetchGenres = async () => {
            console.log(import.meta.env.VITE_APP_CLIENT_ID);
            console.log(import.meta.env.VITE_APP_SECRET);
            const list = await fetch(`https://api.seatgeek.com/2/performers?taxonomies.name=concert&sort=score.desc&datetime_utc.gte=${currentDate}&client_id=${API_KEY}&client_secret=${API_PASS}`);
            const listjson = await list.json();
            setGenres(listjson);
            console.log(genres);

        }

        fetchGenres().catch(console.error)
    }, []);

    return(
        <>
        
        <div className="card-container">
            <div className="card">
                <h3>Card 1</h3>
                <p>More information about the card</p>
            </div>
            <div className="card">
                <h3>Card 2</h3>
                <p>More information about the card</p>
            </div>
            <div className="card">
                <h3>Card 3</h3>
                <p>More information about the card</p>
            </div>
        </div>
        </>
    );
};

export default Card;