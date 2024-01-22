import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  Card,
  Typography,
  Paper,
} from "@mui/material";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { MainData } from "./data/Main";
import { SeccondData } from "./data/Seccond";
import { ThirdData } from "./data/Third";
import { pages } from "./data/ButtonGroups";
import { FiClock } from "react-icons/fi";

type Props = {};

const EndContent = (props: Props) => {

   const itemsPerPage = 4;
   const [currentPage, setCurrentPage] = useState(1);

   
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
          <Paper>
            <Grid>
              <h3 className="horizontal-line">วีดีโออื่นๆ ที่น่าสนใจ</h3>
            </Grid>
            <Grid>
              {ThirdData.map((item, index) => (
                <div key={index}>
                  <Card>
                    <img
                      src={item.url}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "15px",
                      }}
                    />
                    <Typography variant="body2">{item.detail}</Typography>
                  </Card>
                </div>
              ))}
              <Button
                style={{
                  backgroundColor: "green",
                  color:'#fff',
                  marginTop: 5,
                }}
              >
                ดูวิดีโอทั้งหมด
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EndContent;
