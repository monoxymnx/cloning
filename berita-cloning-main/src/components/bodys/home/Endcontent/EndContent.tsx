import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  Card,
  Typography,
  Paper,
} from "@mui/material";
import { FiClock } from "react-icons/fi";
import { MainData } from "./data/Main";
import { SeccondData } from "./data/Seccond";
import { ThirdData } from "./data/Third";

import './style.css'

type Props = {};

interface VideoItem {
  url: string;
  title: string;
  date: string;
  detail?: string; 
}

const EndContent = (props: Props) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(ThirdData.length / itemsPerPage);



  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedThirdData = ThirdData.slice(startIdx, endIdx);

  return (
    <Container style={{ marginTop: 40, marginBottom: 40 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {MainData.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={item.url}
                  alt=""
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    marginTop: "5px",
                  }}
                >
                  {item.title}
                </p>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  style={{ marginTop: "10px" }}
                >
                  <div style={{ fontSize: 12 }}>
                    <FiClock />
                    {item.date}
                  </div>
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={2}>
              {SeccondData.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{
                    display: "flex",
                    flexDirection: "row", // Change the direction to row
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <img
                    src={item.url}
                    alt=""
                    style={{
                      width: "40%", // Adjust the width of the image
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                  <div style={{ flex: 1, padding: "10px" }}>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        marginTop: "5px",
                      }}
                    >
                      {item.title}
                    </p>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      style={{ marginTop: "10px" }}
                    >
                      <div style={{ fontSize: 12 }}>
                        <FiClock />
                        {item.date}
                      </div>
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper style={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <Grid>
              <h3 className="horizontal-line">วีดีโออื่นๆ ที่น่าสนใจ</h3>
            </Grid>
            <Grid>
              {displayedThirdData.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={item.url}
                    alt=""
                    style={{
                      width: "60%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "15px",
                      background: "transparent",
                      boxShadow: "none",
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      textAlign:'start'
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{ marginBottom: "10px" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ marginBottom: "10px" }}
                    >
                      {item.detail}
                    </Typography>
                    <div
                      style={{
                        fontSize: 12,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FiClock />
                      <span style={{ marginLeft: "5px" }}>{item.date}</span>
                    </div>
                  </div>
                </Grid>
              ))}
              <Grid container justifyContent="center">
                <Button
                  onClick={handlePrevClick}
                  disabled={currentPage === 1}
                  style={{
                    marginRight: 5,
                    backgroundColor: "gray",
                    color: "black",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  Prve
                </Button>
                <Button
                  onClick={handleNextClick}
                  disabled={currentPage === totalPageCount}
                  style={{
                    backgroundColor: "gray",
                    color: "black",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                  className={
                    currentPage === totalPageCount ? "transition-effect" : ""
                  }
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EndContent;
