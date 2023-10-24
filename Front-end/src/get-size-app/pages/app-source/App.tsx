import { useState, useEffect } from "react";
import { useActionData, useLocation } from "react-router-dom";
//types:

import { UserSizesArrayType } from "../../types/AppTypes";
//component/pages
import GenderForm from "../first-page/GenderForm";
import SizeForm from "../second-page/SizeForm";
import Load from "../third-page/Load";
import ResultPage from "../fourth-page/ResultPage";
//context
import { UseUserContext } from "../../context/UserContext";
import { UseLanguageContext } from "../../context/LanguageContext";
//css

import "./AppStyles.css";
import "./AppStylesMobile.css";
import "../../../css/library/layouts.css";
import "../../css/hebrew.css";

//reload page function
export function reloadPage() {
  window.location.reload();
}

// *** //////// //////App // //////// //////// //////// //////// //////// //////// //////// //////

type AppPropsType = {
  language: "he" | "en";
};

export default function App({ language }: AppPropsType) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.pathname === "/wix") {
      // Scroll to the top of the page when the '/app' route is navigated to
      window.scrollTo(0, 0);
    }
  }, [location]);

  //context
  const { userData, setUserData } = UseUserContext();

  const { setCurrentLanguage } = UseLanguageContext();

  useEffect(() => {
    if (language === "he") {
      setCurrentLanguage("he");
    } else setCurrentLanguage("en");
  }, []);

  //action data
  const userSizes: UserSizesArrayType = useActionData() as UserSizesArrayType;
  useEffect(() => {
    if (userSizes) {
      setUserData((prevValue) => {
        return {
          ...prevValue,
          userSize: userSizes,
        };
      });
    }
  }, [userSizes]);

  //states
  const [calcStatus, setCalculationStatus] = useState<
    "unStarted" | "pending" | "complete"
  >("unStarted");

  ///use effect load animation

  useEffect(() => {
    if (userData.userSize) {
      setCalculationStatus("pending");
      setTimeout(() => {
        setCalculationStatus("complete");
      }, 2000);
    } else {
      setCalculationStatus("unStarted");
    }
  }, [userData.userSize]);

  //////////// rendering function ///////////////////
  function renderContent() {
    if (userData.userSize) {
      return (
        <div id="ResultPage">
          {calcStatus === "pending" ? (
            <Load />
          ) : (
            calcStatus === "complete" && (
              <ResultPage
                sizes={userData.userSize}
                isTwoSizes={userData.userSize.length > 1}
                isNoSize={userData.userSize.includes("None")}
              />
            )
          )}
        </div>
      );
    } else if (userData.userGender && userData.userName) {
      return <SizeForm />;
    } else {
      return <GenderForm />;
    }
  }

  //component return render
  return <div className="get-your-size-wix">{renderContent()}</div>;
}
