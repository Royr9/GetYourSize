import { UserSizesArrayType } from "../types/AppTypes";

import "../css/ResultPage.css";
import Logo from "./Logo";
import { reloadPage } from "../Pages/GetYourSize";
import { UseUserContext } from "../context/UserContext";
import { ownerDetails } from "../database/ownerData";

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
    if (isNoSize) {
      return (
        <div className="result no-result-page">
          <h1>No Result</h1>
          <p>
            It seems like the measurements your inserted does not fall within
            our sizing, please make sure you had inserted the correct
            measurements. Otherwise, please contact our costumer support and
            they will help you find your size.
          </p>
          <div>
            <button className="animate appear ">
              <a
                href={ownerDetails.whatsAppLink}
                target="_blank"
                rel="noreferrer"
              >
                Contact Support
              </a>
            </button>
            <button
              onClick={() => reloadPage()}
              className="animate appear animate--delay2s animate--fillBackwards"
            >
              Calculate Again
            </button>
          </div>
        </div>
      );
    } else if (sizes.length > 1) {
      return (
        <div className="result two-size-page ">
          <h2>Your recommended size is...</h2>
          <div className="size-w-comp-50">
            <h1>{sizes[0]}</h1>
            <p>50% Compatibility</p>
          </div>
          <div className="size-w-comp-50">
            <h1>{sizes[1]}</h1>
            <p>50% Compatibility</p>
          </div>
          <p>
            Good news! It seems like you can rock these two sizes! if you would
            like to you can contact us and we will help you decide which will be
            the best size for you!
          </p>
          <div>
            <button className="animate appear ">
              <a
                href={ownerDetails.whatsAppLink}
                target="_blank"
                rel="noreferrer"
              >
                Contact Support
              </a>
            </button>
            <button
              onClick={() => reloadPage()}
              className="animate appear animate--delay2s animate--fillBackwards"
            >
              Calculate Again
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="result one-size-page ">
          <h2>Your recommended size is...</h2>
          <div className="size-w-comp-100">
            <h1>{sizes[0]}</h1>
            <p>100% Compatibility</p>
          </div>
          <div>
            <button
              onClick={() => reloadPage()}
              className="one-size-btn animate appear animate--delay2s animate--fillBackwards"
            >
              Calculate Again
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
