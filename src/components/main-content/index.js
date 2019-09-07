import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'


const Main = () => {

    const[photos, setPhotos] = useState([]);

    const fetchPhoto = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(photos => {
                console.log(photos.data);
                if (photos.status === "error") {
                    return;
                }
                setPhotos(photos.data);
                
            })
            .catch(err => console.log("I broke again ..."));
        };

    useEffect( () => {
        fetchPhoto();
    }, []);

    // Commit 

    return (
        <div className='main'>
            <h1>
                NASA Photo of the Day
            </h1>
            <img src={photos.url} key={photos.date} alt={photos.title} className="POTD" />
        </div>
    )
}

export default Main;