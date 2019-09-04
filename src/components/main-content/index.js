import React, { useState, useEffect } from 'react';
import "./index.css";
import axios from 'axios';
import ReactPlayer from 'react-player';

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
            .catch(err => console.log("I broke again ..."));
        };

    useEffect( () => {
        fetchPhoto();
    }, []);

    // const DisplayInfo = () => {
    //     if(!photos.hdurl) {
    //         <ReactPlayer url={photos.url} playing width='50%' className="video-player" />
    //     }
    //     else {
    //         <img src={photos.url} key={photos.date} alt={photos.title} className="POTD" />
    //     }
    // }

    return (
        <div className='main'>
            <h1>
                NASA Photo of the Day
            </h1>
            {/* {this.DisplayInfo} */}
            if (photos.photos.pants) {
                <ReactPlayer url={photos.url} playing width='50%' className="video-player" />
            }
            <img src={photos.url} key={photos.date} alt={photos.title} className="POTD" />
        </div>
    )
}

export default Main;