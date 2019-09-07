import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import background from '../../images/main-page-background.png';

const MainContentDiv = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 50px;
`;

const MainContentH1 = styled.h1`
    font-size: 5.0rem;
    margin: 0px 0px 10px 0px;
    padding: 0px;
    text-shadow: -2px 0 #ff4500, 0 2px #ff4500, 2px 0 #ff4500, 0 -2px #ff4500;
`;

const MainContentPOTD = styled.img`
width: 95%;
max-width: 1200px;
margin-bottom: 10px;
`;

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

    return (
        <MainContentDiv>
            <MainContentH1>
                NASA Photo of the Day
            </MainContentH1>
            <MainContentPOTD src={photos.url} key={photos.date} alt={photos.title} />
        </MainContentDiv>
    )
}

export default Main;