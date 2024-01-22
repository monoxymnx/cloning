import React from "react";
import "./Bar.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFlag,
  FaPhone,
} from "react-icons/fa";

import Facebook from "../../../imgs/facebook-7-16.png";
import Twitter from "../../../imgs/twitter-16.png";
import Instagram from "../../../imgs/icons8-instagram-50.png";
import Youtube from "../../../imgs/icons8-youtube-logo-50.png";
import Line from "../../../imgs/icons8-line-64.png";

type Props = {};

const Bar = (props: Props) => {
  return (
    <div className="bar">
      <div style={{ justifyContent: "space-around" }} className="left">
        <div style={{ color: "#fff" }} className="box">
          เกี่ยวกับเรา
        </div>
        <div style={{ color: "#fff" }} className="box">
          ติดต่อเรา
        </div>
        <div style={{ color: "#fff" }} className="box">
          <FaPhone /> 02-616-3400
        </div>
      </div>

      <div style={{ justifyContent: "space-around" }} className="right">
        <div className="box">
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

        <div style={{ color: "#fff" }} className="box">
          | เปลี่ยนภาษา <FaFlag /> <FaFlag />
        </div>
      </div>
    </div>
  );
};

export default Bar;
