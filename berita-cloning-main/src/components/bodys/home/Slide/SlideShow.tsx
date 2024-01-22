import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./Slide.css";
import { Grid } from "@mui/material";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

type Props = {};

interface SlideImage {
  url: string;
}

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "850px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const slideImages = [
  {
    url: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2021/10/3-1.jpg",
  },
  {
    url: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2021/10/1-1-1980x891.jpg",
  },
  {
    url: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2021/10/2-1-1980x891.jpg",
  },
];

const SlideShow = (props: Props) => {
return (
  <Grid container>
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </Grid>

    <Grid item xs={12}>
      <div className="seemore">
        <div>
          <h1 style={{ color: "green" }}>Berita Muslim Life</h1>
          <p style={{ color: "#fff" }}>สาระดีดี เพื่อตอบโจทย์วิถีมุสลิมเมือง</p>
        </div>
        <div style={{ flexDirection: "row", alignItems: "center" }}>
          <Link to='/magazine'>
            <Button
              style={{ borderRadius: 25, backgroundColor: "green" }}
              variant="contained"
            >
              SEE MORE MAGAZINE
            </Button>
          </Link>
        </div>
      </div>
    </Grid>
  </Grid>
);
}

export default SlideShow