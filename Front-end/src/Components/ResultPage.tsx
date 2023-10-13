import { UserSizesArrayType } from "../types/AppTypes";

import "../css/ResultPage.css";
import Logo from "./Logo";
import { reloadPage } from "../Pages/App";
import { ownerDetails } from "../database/ownerData";
import HeadingAnimated from "./HeadingAnimated";
import { UseLanguageContext } from "../context/LanguageContext";

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
  const renderPageContent = () => {
    //context

    const { language } = UseLanguageContext();

    if (isNoSize) {
      return (
        <div className=" result no-result-page">
          <HeadingAnimated Element="h2" language={language.languageKey}>
            {language.resultPage.noResult.title}
          </HeadingAnimated>
          <p className="animate appear animate--fillBackwards animate--delay2s">
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
              onClick={() => reloadPage()}
              className="app-btn btn-40 animate appear animate--delay5s animate--fillBackwards"
            >
              {language.resultPage.CalculateAgainButton}
            </button>
          </div>
        </div>
      );
    } else if (sizes.length > 1) {
      return (
        <div className="result two-size-page ">
          <HeadingAnimated Element="h2" language={language.languageKey}>
            {language.resultPage.twoResults.title}
          </HeadingAnimated>
          <div className="size-w-comp-50 animate slideInLeft animate--fillBackwards animate--slower animate--delay2s">
            <h1>{sizes[0]}</h1>
            <p> {language.resultPage.twoResults.compatibility}</p>
          </div>
          <div className="size-w-comp-50 animate slideInRight animate--fillBackwards animate--slower animate--delay2s">
            <h1>{sizes[1]}</h1>
            <p>{language.resultPage.twoResults.compatibility}</p>
          </div>
          <p className="animate slideInBottom animate--fillBackwards animate--slower animate--delay4s ">
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
              onClick={() => reloadPage()}
              className="app-btn btn-40 animate appear animate--delay8s animate--fillBackwards animate--delay7s"
            >
              {language.resultPage.CalculateAgainButton}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="result one-size-page ">
          <HeadingAnimated Element="h2" language={language.languageKey}>
            {language.resultPage.oneResult.title}
          </HeadingAnimated>

          <div className="size-w-comp-100">
            <h1>{sizes[0]}</h1>
            <p>{language.resultPage.oneResult.compatibility}</p>
          </div>
          <div>
            <button
              onClick={() => reloadPage()}
              className="app-btn btn-50 animate appear animate--delay2s animate--fillBackwards"
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
    </div>
  );
}
