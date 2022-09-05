import { useState } from "react";
import img1 from "../src/img/Facebook Icon.png";
import img2 from "../src/img/Instagram Icon.png";
import img3 from "../src/img/Twitter Icon.png";
import img4 from "../src/img/GitHub Icon.png";
function FooterCom() {
  return (
    <div>
      <img src={img1} className="but1-footer" />
      <img src={img2} className="but2-footer" />
      <img src={img3} className="but3-footer" />
      <img src={img4} className="but4-footer" />
    </div>
  );
}

export default FooterCom;
