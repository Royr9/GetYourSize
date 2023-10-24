import React from "react";
import ReactDOM from "react-dom/client";

//css
import "./css/Index.css";

import "./css/library/animations.css";
import "./css/library/layouts.css";
import "./css/library/styles.css";
import GetYourSize from "./GetYourSize";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GetYourSize />
  </React.StrictMode>
);
