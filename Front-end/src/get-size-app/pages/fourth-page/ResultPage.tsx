import { UserSizesArrayType } from "../../types/AppTypes";

import "./ResultPage.css";
import Logo from "../../../components/Logo";
import { ownerDetails } from "../../database/ownerData";
import HeadingAnimated from "../../../components/HeadingAnimated";
import { UseLanguageContext } from "../../../contexts/LanguageContext";
import { UseUserContext } from "../../../contexts/UserContext";
import Footer from "../../../components/Footer";

type ResultPagePropsType = {
  sizes: UserSizesArrayType;
  isTwoSizes: boolean;
  isNoSize: boolean;
};

export default function ResultPage({
  sizes,
  isTwoSizes,
  isNoSize,
}: ResultPagePropsType) {
  const { setUserData } = UseUserContext();

  function calcAgain() {
    setUserData((prevValue) => {
      return { ...prevValue, userSize: undefined };
    });
  }

  const renderPageContent = () => {
    //context

    const { language } = UseLanguageContext();

    if (isNoSize) {
      return (
        <div className=" result no-result-page">
          <HeadingAnimated Element="h2">
            {language.resultPage.noResult.title}
          </HeadingAnimated>
          <p className="message animate appear animate--fillBackwards animate--delay2s">
            {language.resultPage.noResult.message}
          </p>
          <div>
            <button className=" app-btn btn-40 animate appear animate--fillBackwards animate--delay4s">
              <a
                href={ownerDetails.whatsAppLink}
                target="_blank"
                rel="noreferrer"
              >
                {language.resultPage.contactSupportButton}
              </a>
            </button>
            <button
              onClick={() => calcAgain()}
              className="app-btn btn-40 animate appear animate--delay5s animate--fillBackwards"
            >
              {language.resultPage.CalculateAgainButton}
            </button>
          </div>
        </div>
      );
    }
    // two sizes ****************************************************************
    else if (sizes.length > 1) {
      return (
        <div className="result two-size-page ">
          <HeadingAnimated Element="h2">
            {language.resultPage.twoResults.title}
          </HeadingAnimated>
          <div className="size-w-comp-50 animate slideInLeft animate--fillBackwards animate--slower animate--delay1s ">
            <h1 className="">{sizes[0]}</h1>
            <HeadingAnimated
              Element="p"
              className={"comp-50-container add-padding animate--delay2s "}
              delay="animate--delay2s"
            >
              {language.resultPage.twoResults.compatibility}
            </HeadingAnimated>
          </div>

          <div className="size-w-comp-50 animate slideInLeft animate--fillBackwards animate--slower animate--delay1s">
            <h1 className="">{sizes[1]}</h1>
            <HeadingAnimated
              Element="p"
              className={"comp-50-container add-padding animate--delay2s"}
              delay="animate--delay2s"
            >
              {language.resultPage.twoResults.compatibility}
            </HeadingAnimated>
          </div>
          <p className=" message animate slideInBottom animate--fillBackwards animate--slower animate--delay4s ">
            {language.resultPage.twoResults.message}
          </p>
          <div>
            <button className="app-btn btn-40 animate appear animate--fillBackwards   animate--delay7s ">
              <a
                href={ownerDetails.whatsAppLink}
                target="_blank"
                rel="noreferrer"
              >
                {language.resultPage.contactSupportButton}
              </a>
            </button>
            <button
              onClick={() => calcAgain()}
              className="app-btn btn-40 animate appear animate--delay8s animate--fillBackwards animate--delay7s"
            >
              {language.resultPage.CalculateAgainButton}
            </button>
          </div>
        </div>
      );

      // one size ****************************************************************
    } else {
      return (
        <div className="result one-size-page ">
          <HeadingAnimated Element="h2">
            {language.resultPage.oneResult.title}
          </HeadingAnimated>

          <div className="size-w-comp-100 animate slideInLeft animate--fillBackwards animate--slower animate--delay1s ">
            <h1 className="">{sizes[0]}</h1>
            <HeadingAnimated
              Element="p"
              className={"comp-100-container add-padding animate--delay4s"}
              delay="animate--delay4s "
            >
              {language.resultPage.oneResult.compatibility}
            </HeadingAnimated>
          </div>
          <div>
            <button
              onClick={() => calcAgain()}
              className="app-btn btn-70 animate appear animate--slower animate--delay5s animate--fillBackwards"
            >
              {language.resultPage.CalculateAgainButton}
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="Result-container">
      <Logo />
      {renderPageContent()}
      <Footer />
    </div>
  );
}
