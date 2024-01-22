import React from "react";

type Props = {};

const Banner = (props: Props) => {
  const bannerStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={bannerStyle}>
      <a
        href="https://www.facebook.com/serdahalal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ width: 650, height: "auto" }}
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2022/01/serda-Ads-website-1200x200-1-scaled.jpg"
          alt=""
        />
      </a>
    </div>
  );
};

export default Banner;
