import React from "react";
import "../Love/love.css";


import Container from "@mui/material/Container";
import  Pagination  from '@mui/material/Pagination'

import LoveComponent from '../../components/bodys/love/Love'
import LoveCom from "../../components/headers/headBar/LoveCom";


type Props = {};

const Love = (props: Props) => {
      

  return (
    <div>
      <div className="header">
        <h1>Love</h1>
        <p>
          ขอต้อนรับพี่น้องมุสลิมทุกท่านสู่ช่อง "BERITA MUSLIM"
          สาระความรู้ดีๆในศาสนาอิสลามที่นำมาฝากทั้งมุสลิมีนและมุสลิมะห์
          ไม่ว่าจะเรื่องความรัก คำสอน
          ข้อมูลต่างๆในศาสนาอิสลามหรือสิ่งไหนที่ทุกคนอยากรู้
          เราจะนำคอนเทนต์ดีๆที่ฮาลาลมาให้ทุกคนได้รับชมกัน
        </p>
      </div>

      <Container maxWidth="lg" className="container">
        
          <LoveComponent />
          
      </Container>
     
    </div>
  );
};

export default Love;
