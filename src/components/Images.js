import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";

import { fetchImages } from "../api";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Images() {

    useEffect(async() => {
        const imageData = await fetchImages();
        setImageList(imageData);
        //console.log(data);
    }, []);

    const [ imageList, setImageList ] = useState([]);

    console.log(imageList)
    return (
        <Container>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "50px",
                }}
            >
                <Grid container spacing={3} alignItems="stretch">
                    {imageList.map((image) => (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            key={image.date}
                            style={{ height: "100%" }}
                        >
                            <ImageCard
                                image={image}
                            />
                        </Grid>
                    ))}
            </Grid>        
            </div>
        </Container>
    )
}