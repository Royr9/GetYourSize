import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import Logo from "./Logo";

import "../css/Load.css";

export default function Load() {
  return (
    <div className="load ">
      <Logo />

      <div className="load-animation">
        <video
          autoPlay
          loop
          width={121}
          height={120}
          src="/media/load-animation.mp4"
        ></video>
        <h3>Calculating...</h3>
      </div>
    </div>
  );
}
/* <span className="circular-loader-container ">
        {
          <LoopRoundedIcon
            sx={{ fontSize: 100 }}
            className=" rotate animate--infinite animate--slow"
          />
        }
      </span> */
