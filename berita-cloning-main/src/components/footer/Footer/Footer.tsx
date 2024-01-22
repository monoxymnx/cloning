import React from "react";
import { Grid, Box, Container, Input, Button } from "@mui/material";
import { FiMapPin, FiPhone, FiMail, } from "react-icons/fi";
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube,} from 'react-icons/fa6'
import './footer.css'
import Copyright from "../Copyright/Copyright";

import Facebook from "../../../imgs/facebook-7-16.png";
import Twitter from "../../../imgs/twitter-16.png";
import Instagram from "../../../imgs/icons8-instagram-50.png";
import Youtube from "../../../imgs/icons8-youtube-logo-50.png";
import Line from "../../../imgs/icons8-line-64.png";

const Footer = () => {
  return (
    <div className="footer">
      <Box sx={{ p: 2, bgcolor: "#171717", alignItems: "center" }}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <h2 style={{ color: "#fff" }}>ABOUT US</h2>
              <p style={{ color: "#6C6864" }}>
                เพราะอิสลามสอนว่า ทั้งชีวิตคือการเรียนรู้
                เราจึงขอเป็นส่วนหนึ่งในความรู้ดีๆ ที่คุณแสวงหา Berita Muslim Mag
                เราพร้อมเสิร์ฟอาหารฮาลาลให้กับสมองของคุณ
                ในรูปแบบนิตยสารและสื่อดิจิทัลที่นำเสนอสาระเชิงสร้างสรรค์เพื่อพัฒนาชีวิตและสังคมมุสลิม
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <h2 style={{ color: "#fff" }}>CONTACT US</h2>
              <div className="contact">
                <div>
                  <FiMapPin style={{ color: "#6C6864" }} />
                  <p>
                    Beritamuslimmag 199/19 วิภาวดีรังสิต สามแสนใน พญาไท 10400
                    กทม.
                  </p>
                </div>

                <div>
                  <FiPhone style={{ color: "#6C6864" }} />
                  <p>02-616-3400</p>
                </div>

                <div>
                  <FiMail style={{ color: "#6C6864" }} />
                  <p>beritamuslimgroup@gmail.com</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <h2 style={{ color: "#fff" }}>FOLLOW US</h2>
              <div className="icon-follow">
                <a href="https://beritamuslimmag.com/?lang=th#">
                  <img src={Facebook} alt="" className="social-icon" />
                </a>
                <a href="https://beritamuslimmag.com/?lang=th#">
                  <img src={Twitter} alt="" className="social-icon" />
                </a>
                <a href="https://beritamuslimmag.com/?lang=th#">
                  <img src={Instagram} alt="" className="social-icon" />
                </a>
                <a href="https://beritamuslimmag.com/?lang=th#">
                  <img src={Youtube} alt="" className="social-icon" />
                </a>
                <a href="https://beritamuslimmag.com/?lang=th#">
                  <img src={Line} alt="" className="social-icon" />
                </a>
              </div>
              <div className="search">
                <Input
                  placeholder="Search..."
                  style={{ backgroundColor: "#fff" }}
                />

                <Button>Search</Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Copyright />
    </div>
  );
};

export default Footer;
