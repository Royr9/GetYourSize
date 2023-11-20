import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import Logo from "../../../app_components/Logo";

import "./Load.css";
import { UseLanguageContext } from "../../../contexts/LanguageContext";
import { useEffect, useState } from "react";
import HeadingAnimated from "../../../app_components/HeadingAnimated";
import Footer from "../../../app_components/Footer";

export default function Load() {
  const { language } = UseLanguageContext();

  const viewPortWidth = window.innerWidth;

  const [isMobileSize, setIsMobileSize] = useState<boolean>(false);

  useEffect(() => {
    if (viewPortWidth < 651) {
      setIsMobileSize(true);
    }
  }, [viewPortWidth]);

  return (
    <div className="load ">
      <Logo customAppSize="smaller" />

      <div className="load-animation">
        {
          <LoopRoundedIcon
            sx={
              isMobileSize
                ? { fontSize: 70, display: "block" }
                : { fontSize: 150, display: "block" }
            }
            className=" animate rotate animate--infinite animate--slow"
          />
        }
      </div>
      <HeadingAnimated Element="h3">
        {language.loadPage.loadText}
      </HeadingAnimated>
      <Footer />
    </div>
  );
}
/* <span className="circular-loader-container ">
       
      </span> */
