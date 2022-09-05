import { useState } from "react";
import img from "../src/img/Poza-Liviu.jpeg";
function InfoCom() {
  return (
    <div>
      <img src={img} alt="imgLiviu" width="317px" height="317px" />
      <h3>Craciun Liviu-Valentin</h3>
      <h4>Web Developer</h4>
      <button className="but1">Email</button>
      <button className="but2">Linkedln</button>
    </div>
  );
}

export default InfoCom;
