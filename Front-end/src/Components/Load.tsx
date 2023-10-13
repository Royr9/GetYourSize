import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import Logo from "./Logo";

import "../css/Load.css";
import { UseLanguageContext } from "../context/LanguageContext";

export default function Load() {
  const { language } = UseLanguageContext();

  return (
    <div className="load ">
      <Logo />

      <div className="load-animation">
        {
          <LoopRoundedIcon
            sx={{ fontSize: 100 }}
            className="animate rotate animate--infinite animate--slow"
          />
        }

        <h3> {language.loadPage.loadText} </h3>
      </div>
    </div>
  );
}
/* <span className="circular-loader-container ">
       
      </span> */
