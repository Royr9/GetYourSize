import { useRef, useState } from "react";
import "./Home.css";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../../Context/AppContext";

export default function Home() {
  const { isAppOpen, setIsAppOpen } = useAppContext();
  function toggleApp() {
    setIsAppOpen(!isAppOpen);
  }

  const openAppRef = useRef<HTMLButtonElement>(null!);

  return (
    <div className="Home">
      <section className="landing-page-section">
        <div className="content-container landing-page-content">
          <div className="landing-page-title">
            <h1 className="title-heading">
              {" "}
              Sizing made easy for your online costumers
            </h1>
            <h2 className="title-sub-heading">
              Save time and enhance productivity with the app that handles
              costumer sizing, for you!
            </h2>

            <button ref={openAppRef} onClick={toggleApp} className="title-btn">
              Try the app now
            </button>
          </div>
          {isAppOpen && (
            <div className="iframe-container appear-smooth">
              <CloseIcon onClick={toggleApp} className="closeIcon" />
              <iframe title="app" src="/app"></iframe>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
