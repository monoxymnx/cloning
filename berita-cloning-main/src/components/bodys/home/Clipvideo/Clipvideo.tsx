import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Card, Typography, Paper } from "@mui/material";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { ClipData } from "./data/ClipData";
import { MoreData } from "./data/Moredata";
import { FiClock } from "react-icons/fi";

type Props = {};

interface VideoItem {
  url: string;
  title: string;
  date: string;
  detail: string; 
}

const Clipvideo = (props: Props) => {
  return (
    <Container style={{ backgroundColor: "#fff",marginTop:40,marginBottom:40 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Grid item xs={12} style={{ marginBottom: 45 }}>
            <Grid style={{ textAlign: "start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h2>ClipVideo</h2>
                <p>
                  ขอต้อนรับพี่น้องมุสลิมทุกท่านสู่ช่อง "BERITA MUSLIM"
                  สาระความรู้ดีๆในศาสนาอิสลามที่นำมาฝากทั้งมุสลิมีนและมุสลิมะห์
                  เราจะนำคอนเทนต์ดีๆที่ฮาลาลมาให้ทุกคนได้รับชมกัน
                </p>
              </div>
            </Grid>
            <Grid>
              <AwesomeSlider>
                <div
                  className="imgSlide"
                  data-src="https://wallpapercave.com/wp/wp8408447.jpg"
                />
                <div
                  className="imgSlide"
                  data-src="https://wallpapercave.com/wp/wp8408610.jpg"
                />
                <div
                  className="imgSlide"
                  data-src="https://c4.wallpaperflare.com/wallpaper/348/422/333/cat-4k-hd-wallpaper-preview.jpg"
                />
              </AwesomeSlider>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={2}>
              {ClipData.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
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
                      height: "150px",
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
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper>
            <Grid>
              <h3 className="horizontal-line">วีดีโออื่นๆ ที่น่าสนใจ</h3>
            </Grid>
            <Grid>
              {MoreData.map((item, index) => (
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
                  color: "#fff",
                  marginTop: 5,
                }}
              >
                ดูวิดีโอทั้งหมด
              </Button>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}></Grid>
      </Grid>
    </Container>
  );
};

export default Clipvideo;
