import React, { useState, useEffect } from 'react';
import "./index.css";
import axios from 'axios';

const Main = () => {

    const[photos, setPhotos] = useState([]);

    const fetchPhoto = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(photos => {
                console.log(photos.data);
                console.log(photos.data.title);
                if (photos.status === "error") {
                    return;
                }
                setPhotos(photos.data);
                
            })
            .catch(err => console.log("noooo"));
        };

    useEffect( () => {
        fetchPhoto();
    }, []);

    return (
        <div className='main'>
            <h1>
                NASA Photo of the Day
            </h1>
            <img src={photos.hdurl} key={photos.date} alt={photos.title} className="POTD" />
        </div>
    )
}

export default Main;