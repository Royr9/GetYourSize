import { useState, useEffect } from "react";
import { useActionData } from "react-router-dom";
//types:

import { UserSizesArrayType } from "../types/AppTypes";
//component/pages
import GenderForm from "../Components/GenderForm";
import SizeForm from "../Components/SizeForm";
import Load from "../Components/Load";
import ResultPage from "../Components/ResultPage";
//context
import { UseUserContext } from "../context/UserContext";
import { LanguageContextProvider } from "../context/LanguageContext";
//css

import "../css/AppStyles.css";
import "../css/AppStylesMobile.css";
import "../css/library/layouts.css";
import "../css/hebrew.css";

//reload page function
export function reloadPage() {
  window.location.reload();
}

// //////// //////// //////App // //////// //////// //////// //////// //////// //////// //////// //////

export default function App() {
  //context

  const { userData, setUserData } = UseUserContext();

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
      }, 500);
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
  return (
    <LanguageContextProvider>
      <div className="get-your-size-wix">{renderContent()}</div>;
    </LanguageContextProvider>
  );
}
