import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Grid, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { HighlightData } from "./data/HighlightData";


interface SlideImage {
  url: string;
  title: string;
  detail: string;
  date: string;
}

const divStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "300px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const cardStyle: React.CSSProperties = {
  margin: "10px",
};

const slideContainerStyle: React.CSSProperties = {
  margin: "-10px",
  marginBottom: "30px",
};

const Highlight: React.FC = () => {
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
          <h1 style={{ color: "green" }}>HIGHLIGHT ARTICLE</h1>
          <p style={{ color: "#fff" }}>
            รวบรวมบทความที่น่าสนใจของ Berita Muslim Magazine
            มารวมให้อ่านกันได้ที่นี่
          </p>
        </Grid>
        <Grid item xs={12}>
          <div style={slideContainerStyle}>
            <Slide slidesToShow={slidesToShow}>
              {HighlightData.map((slideImage, index) => (
                <div key={index} style={cardStyle}>
                  <Card>
                    <CardContent>
                      <div
                        style={{
                          ...divStyle,
                          backgroundImage: `url(${slideImage.url})`,
                        }}
                      ></div>
                      <Typography variant="h6">{slideImage.title}</Typography>
                      <Typography variant="body2">
                        {slideImage.detail}
                      </Typography>
                      <Typography variant="caption">
                        {slideImage.date}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slide>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Highlight;
