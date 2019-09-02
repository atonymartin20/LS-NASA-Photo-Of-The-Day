import React, { useState, useEffect } from 'react';
import "./index.css";

const Main = () => {

    const[photos, setPhotos] = useState([]);

    const fetchPhoto = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(res => res.json())
            .then(photos => {
                console.log(photos);
                if (photos.status === "error") {
                    return;
                }
                setPhotos(photos);
            })
            .catch(err => console.log("noooo"));
        };

    useEffect( () => {
        fetchPhoto();
    }, []);

    return (
        <div className='main'>
            <p>
                Read through the instructions in the README.md file to build your NASA
                app! Have fun <span role="img" aria-label="rocket">🚀</span>!
            </p>
            {photos.map(photo => (
                <img width="200" src={photo} key={photo} alt={photo} />
            ))}
        </div>
    )
}

export default Main;