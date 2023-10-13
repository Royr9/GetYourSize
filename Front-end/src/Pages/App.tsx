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

  const { userData } = UseUserContext();

  //action data
  const userSizes: UserSizesArrayType = useActionData() as UserSizesArrayType;

  //states
  const [calcStatus, setCalculationStatus] = useState<
    "unStarted" | "pending" | "complete"
  >("unStarted");

  ///use effect load animation

  useEffect(() => {
    if (userSizes) {
      setCalculationStatus("pending");
      setTimeout(() => {
        setCalculationStatus("complete");
      }, 2500);
    } else {
      setCalculationStatus("unStarted");
    }
  }, [userSizes]);

  //////////// rendering function ///////////////////
  function renderContent() {
    if (userSizes) {
      return (
        <div id="ResultPage">
          {calcStatus === "pending" ? (
            <Load />
          ) : (
            calcStatus === "complete" && (
              <ResultPage
                sizes={userSizes}
                isTwoSizes={userSizes.length > 1}
                isNoSize={userSizes.includes("None")}
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
