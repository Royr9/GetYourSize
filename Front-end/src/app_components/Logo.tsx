import React from "react";

import "./Logo.css";
import { reloadPage } from "../get-size-app/pages/app-source/App";
import { UseDeviceSizeContext } from "../contexts/DeviceSizeContext";

type LogoPropsType = {
  customAppSize?: "smaller";
};

export default function Logo({ customAppSize }: LogoPropsType) {
  const { deviceSize } = UseDeviceSizeContext();

  let size: "bigger" | "big" | "normal" | "small";

  if (customAppSize === "smaller") {
    if (deviceSize === "mobile" || deviceSize === "tablet") {
      size = "bigger";
    } else {
      size = "big";
    }
  } else {
    size =
      deviceSize === "mobile"
        ? "bigger"
        : deviceSize === "tablet"
        ? "big"
        : deviceSize === "laptop"
        ? "normal"
        : "small";
  }

  return (
    <div onClick={() => reloadPage()} className="app-logo">
      <img className={`logo-img ${size} `} src="/media/logo.png" alt="" />
      <h1 className={`logo-content ${size}`}>Get Your Size</h1>
    </div>
  );
}
