import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import Logo from "../../components/logo/Logo";

import "./Load.css";
import { UseLanguageContext } from "../../context/LanguageContext";
import { useEffect, useState } from "react";
import HeadingAnimated from "../../../components/HeadingAnimated";
import Footer from "../../components/footer/Footer";

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
      <Logo />

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
