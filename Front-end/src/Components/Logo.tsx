import React from "react";

import "../css/Logo.css";
import { reloadPage } from "../Pages/GetYourSizeWix";

export default function Logo() {
  return (
    <div onClick={() => reloadPage()} className="app-logo">
      <img className="logo-img" src="/media/logo.png" alt="" />
      <h1 className="logo-content">Get Your Size</h1>
    </div>
  );
}
