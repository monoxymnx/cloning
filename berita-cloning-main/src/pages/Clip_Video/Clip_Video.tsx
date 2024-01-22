import React, { useState, useEffect } from "react";
import "../Clip_Video/clip.css";
import { OtherDetail } from "../../data/Clipvideo";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FiClock } from "react-icons/fi";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Clip_VideoCom from "../../components/headers/headBar/Clip_VideoCom";


type ClipData = {
  clip: string;
  title: string;
  date: string;
};

const Halal: React.FC = () => {
  const [data, setData] = useState<ClipData[]>([]);
  const [showItems, setShowItems] = useState<number>(8); // Displaying initial 4 items

  useEffect(() => {
    setData(OtherDetail);
  }, []);

  const handleLoadMore = () => {
    setShowItems((prevCount) => prevCount + 8); // Load additional 4 items
  };

  return (
    <div>
      <div className="header">
        <Clip_VideoCom />
      </div>

      <Container maxWidth="lg">
        <div className="main">

        </div>

        <div className="other">
          <Grid container spacing={2} justifyContent="center">
            {data.slice(0, showItems).map((item, index) => (
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
                }}
              >
                <img
                  src={item.clip}
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
                  <FiClock />
                  {item.date}
                </Typography>
              </Grid>
            ))}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              {showItems < data.length && ( // Show Load More button if there are more items
                <Button
                  style={{ color: "#fff", backgroundColor: "green", fontSize:20 }}
                  variant="outlined"
                  onClick={handleLoadMore}
                >
                  โหลดวิดีโอ เพิ่มเติม
                </Button>
              )}
            </div>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Halal;
