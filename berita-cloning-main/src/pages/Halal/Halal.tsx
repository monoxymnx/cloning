import React from "react";
// import BaiTul from ''
import "../Halal/halal.css";
import HalalCom from "../../components/headers/headBar/HalalCom";

type Props = {};

const Halal = (props: Props) => {
  return (
    <div>
      <div className="header">
        <HalalCom />
      </div>
    </div>
  );
};

export default Halal;
