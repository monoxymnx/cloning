import React from 'react'

type Props = {}

const Advert = (props: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a
        href="https://www.facebook.com/tiewtaitiewngai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ width: 700, height: 125 }}
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2023/06/1200-x-200-pixels.jpg"
          alt=""
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCfOgRKKLKvVcBvXo-6jpv3w"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ width: 700, height: 125 }}
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2022/01/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7.jpg"
          alt=""
        />
      </a>
    </div>
  );
}

export default Advert