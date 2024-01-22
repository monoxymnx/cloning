import React from "react";

import Container from "@mui/material/Container";
import "../M_style/mstyle.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FiClock } from "react-icons/fi";
import MullafCom from "../../components/headers/headBar/MullafCom";


type Props = { 
};


const button = {
  backgroundColor: "#C9C9C9",
  color: "#fff",
  borderRadius: "30px",
};

const Mullaf = (props: Props) => {
  return (
    <div>
      
        <MullafCom />
      <div
        className="main"
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ maxWidth: 590 }}>
          <CardMedia
            sx={{ height: 170 }}
            image="https://beritamuslimmag.com/wp-content/uploads/2021/10/v5.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nicolas Anelka / “ฉันมีความเชื่อมั่นในใจว่าอิสลามคือศาสนาของฉัน”
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <FiClock /> 2022-04-20 14:36
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nicolas Anelka
              เป็นหนึ่งในนักฟุตบอลที่ค่าตัวแพงที่สุดในประวัติศาสตร์
              และเขาได้มาเล่นในหลายสโมสรที่ใหญ่ในยุโรป เช่น เรอัล มาดริด,
              ยูเวนตุส, เชลซี, อาร์เซนอล...
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={button}>Muallaf</Button>
            <Button style={button}>Nicolas Anelka</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://beritamuslimmag.com/wp-content/uploads/2021/10/v5.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Zakirnaik ผู้ทำให้คนหันมานับถืออิสลาม
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <FiClock /> 2022-04-20 14:36
            </Typography>
            <Typography variant="body2" color="text.secondary">
             
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={button}>Muallaf</Button>
            <Button style={button}>Nicolas Anelka</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Mullaf;
