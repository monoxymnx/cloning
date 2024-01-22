import React from 'react'

type Props = {}

const NewsHead = (props: Props) => {
  return (
    <div className="header">
      <h1>News</h1>
      <p>
        ขอต้อนรับพี่น้องมุสลิมทุกท่านสู่ช่อง "BERITA MUSLIM"
        สาระความรู้ดีๆในศาสนาอิสลามที่นำมาฝากทั้งมุสลิมีนและมุสลิมะห์
        ไม่ว่าจะเรื่องความรัก คำสอน
        ข้อมูลต่างๆในศาสนาอิสลามหรือสิ่งไหนที่ทุกคนอยากรู้
        เราจะนำคอนเทนต์ดีๆที่ฮาลาลมาให้ทุกคนได้รับชมกัน
      </p>
    </div>
  );
}

export default NewsHead