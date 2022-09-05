import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InfoCom from "./Info-Com";
import AboutCom from "./About-Com";
import InterestsCom from "./Interests-Com";
import FooterCom from "./Footer-Com";

function App() {
  return (
    <div>
      <InfoCom />
      <AboutCom />
      <InterestsCom />
      <FooterCom />
    </div>
  );
}

export default App;
