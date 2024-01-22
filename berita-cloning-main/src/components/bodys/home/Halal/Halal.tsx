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

const Halal = (props: Props) => {
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Halal</h1>
                <Button
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    borderRadius: 10,
                  }}
                >
                  อ่านบทความทั้งหมด
                </Button>
              </div>
            </Grid>
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Halal;
