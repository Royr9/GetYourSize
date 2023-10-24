import React from "react";

import "./Logo.css";
import { reloadPage } from "../../Pages/App/App";

type logoPropsType = {
  size?: "small" | "normal" | "big" | "bigger";
};

export default function Logo({ size = "big" }: logoPropsType) {
  return (
    <div onClick={() => reloadPage()} className="app-logo">
      <img className={`logo-img ${size}`} src="/media/logo.png" alt="" />
      <h1 className={`logo-content ${size}`}>Get Your Size</h1>
    </div>
  );
}
