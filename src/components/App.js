import React, { useState, useEffect } from "react";
import { fetchImages } from "../api";

export default function App() {

    useEffect(async() => {
        const imageData = await fetchImages();
        setImageList(imageData);
        //console.log(data);
    }, []);

    const [ imageList, setImageList ] = useState([]);

    console.log(imageList)

    return <h1>Welcome to Spacetagram</h1>
}

 
