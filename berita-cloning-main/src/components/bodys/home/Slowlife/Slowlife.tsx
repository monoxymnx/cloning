import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

import { FiClock } from "react-icons/fi";
import { SlowlifeData } from "./data/SlowlifeData";
import { SlowlifeMoreData } from "./data/Other";
import { pages } from "./data/ButtonGroups";

import "./Slowlife.css"; 

type Props = {};

interface SlowlifeItem {
  url: string;
  title: string;
  detail: string;
  date: string;
}

const Slowlife: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Container className="slowlife-container">
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ marginBottom: 45 }}>
            <Grid className="slowlife-title">
              <div className="title-button-container">
                <h1>Slow Life</h1>
                <Button className="read-all-button">อ่านบทความทั้งหมด</Button>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                style={{ justifyContent: "space-around", marginTop: 10 }}
              >
                {SlowlifeData.map((item, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    className="article-container"
                  >
                    <img src={item.url} alt="" className="article-image" />
                    <h3>{item.title}</h3>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        marginTop: "5px",
                      }}
                    >
                      {item.detail}
                    </p>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      className="article-date"
                    >
                      <div className="article-date-text">
                        <FiClock />
                        {item.date}
                      </div>
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Grid
                container
                spacing={2}
                style={{ justifyContent: "space-around", marginTop: 10 }}
              >
                {SlowlifeMoreData.map((item, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    md={3}
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
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <p className="article-title">{item.title}</p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        marginTop: "5px",
                      }}
                    >
                      {item.detail}
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
              <Grid container spacing={2} style={{ marginTop: 40 }}>
                {pages.map((page, index) => (
                  <Button
                    key={index}
                    style={{
                      backgroundColor: "gray",
                      borderRadius: "25px",
                      marginBottom: "0.5rem",
                    }}
                    variant="contained"
                  >
                    {page}
                  </Button>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Slowlife;
