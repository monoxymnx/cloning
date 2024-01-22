import {
  Container,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";


import React from "react";

type Props = {};


interface VideoData {
  url: string;
  detail: string;
}

const Mstyle = (props: Props) => {
  return (
    <div>
      <Container
        style={{
          backgroundColor: "#fff",
          marginTop: 50,
          marginBottom: 30,
          borderRadius: 10,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ marginBottom: 45 }}>
            <Grid style={{ textAlign: "start" }}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h1>M Style</h1>
                <Button style={{backgroundColor:'green', color:'#fff', borderRadius:10}}>อ่านบทความทั้งหมด</Button>
            </div>
  
            </Grid>
            {/* <Grid style={{ textAlign: "start" }}>
              <p>
                ขอต้อนรับพี่น้องมุสลิมทุกท่านสู่ช่อง "BERITA MUSLIM"
                สาระความรู้ดีๆในศาสนาอิสลามที่นำมาฝากทั้งมุสลิมีนและมุสลิมะห์
                เราจะนำคอนเทนต์ดีๆที่ฮาลาลมาให้ทุกคนได้รับชมกัน
              </p>
            </Grid>
            <Grid>
              <AwesomeSlider>
                <div data-src="https://wallpapercave.com/wp/wp8408447.jpg" />
                <div data-src="https://wallpapercave.com/wp/wp8408610.jpg" />
                <div data-src="https://c4.wallpaperflare.com/wallpaper/348/422/333/cat-4k-hd-wallpaper-preview.jpg" />
              </AwesomeSlider>
            </Grid>
          </Grid>
          <Grid item xs={4}>
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
                        width: "80%",
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
          </Grid>
          <Grid item xs={8}>
            <Grid style={{ display: "flex", marginBottom: 30 }}>
              {ClipData.map((item, index) => (
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
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Mstyle;
