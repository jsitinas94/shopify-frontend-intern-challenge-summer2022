import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";

import { fetchImages } from "../api";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

export default function Images() {

    const [ imageList, setImageList ] = useState([]);
    const [ triggerNewImages, setTriggerNewImages] = useState(0);

    useEffect(async() => {
        const imageData = await fetchImages();
        setImageList(imageData);
        window.scrollTo(0, 0);
    }, [triggerNewImages]);

    function handleClick() {
        let count = triggerNewImages;
        count++
        setTriggerNewImages(count);
    }

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
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "50px",
                    }}
            >
                <Button 
                    variant="contained" 
                    style={{color: "navy", backgroundColor: "linen"}}
                    onClick={handleClick}
                > 
                    Load More Image 
                </Button>
            </div>
        </Container>
    )
}