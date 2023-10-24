import React from "react";

import "./Logo.css";
import { reloadPage } from "../../Pages/App/App";
import { UseDeviceSizeContext } from "../../../contexts/DeviceSizeContext";

export default function Logo() {
  const { deviceSize } = UseDeviceSizeContext();

  let size =
    deviceSize === "mobile"
      ? "bigger"
      : deviceSize === "tablet"
      ? "big"
      : deviceSize === "laptop"
      ? "normal"
      : "small";

  return (
    <div onClick={() => reloadPage()} className="app-logo">
      <img className={`logo-img ${size} `} src="/media/logo.png" alt="" />
      <h1 className={`logo-content ${size}`}>Get Your Size</h1>
    </div>
  );
}
