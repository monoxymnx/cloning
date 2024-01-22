import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Grid, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { PhotoData } from "./data/PhotoData";
import Carousel from "better-react-carousel";


interface PhotoProps {}


const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "300px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const cardStyle = {
  margin: "10px",
};

const slideContainerStyle = {
  margin: "-10px",
  marginBottom: "30px",
};

const Photo = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      setSlidesToShow(screenWidth <= 767 ? 1 : 3);
    };

    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ margin: 30, textAlign: "center" }}>
          <h1 style={{ color: "green" }}>PHOTO GRAPHY</h1>
          <p style={{ color: "#fff" }}>
            รวบรวมบทความที่น่าสนใจของ Berita Muslim Magazine
            มารวมให้อ่านกันได้ที่นี่
          </p>
        </Grid>
        <Grid item xs={12}>
          <Carousel cols={4} rows={2} gap={10} loop>
            {PhotoData.map((image, index) => (
              <Carousel.Item key={index}>
                <img width="100%"  src={image.url} alt={`Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Photo;
