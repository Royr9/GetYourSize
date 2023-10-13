import { UseUserContext } from "../context/UserContext";
import { menInputs, womenInputs } from "../database/inputs";
import { Form } from "react-router-dom";
import Logo from "./Logo";

import "../css/SizeForm.css";
import { reloadPage } from "../Pages/App";
import { UseLanguageContext } from "../context/LanguageContext";
import ChangeLanguageButton from "./ChangeLanguageButton";

//icon
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function SizeForm() {
  const { userData } = UseUserContext();

  const { userGender: gender, userName: name } = userData;

  const { language } = UseLanguageContext();

  let inputs: { label: string; name: string }[];
  if (gender === "men") {
    if (language.languageKey === "en") {
      inputs = menInputs.en;
    } else if (language.languageKey === "he") {
      inputs = menInputs.he;
    }
  } else {
    if (language.languageKey === "en") {
      inputs = womenInputs.en;
    } else if (language.languageKey === "he") {
      inputs = womenInputs.he;
    }
  }

  return (
    <div className="size-form-page">
      <div className="size-form-container">
        <span onClick={() => reloadPage()} className="back-btn">
          <ArrowBackIosIcon sx={{ fontSize: "2vw" }} />
          {language.sizeFormPage.backButton}
        </span>
        <ChangeLanguageButton />

        <Form className={gender} method="post" action="/app">
          <div className="logo-w-label">
            <Logo />
            <label className={language.languageKey}>
              {`${language.sizeFormPage.greetings} ${name}`}
            </label>
          </div>
          <input type="text" hidden name="gender" value={gender} />
          {inputs!.map((input) => {
            return (
              <div className="input-w-label-container">
                <label className={language.languageKey}>{input.label}</label>
                <input className="input" type="number" name={input.name} />
              </div>
            );
          })}
          <button
            className="app-btn btn-full
          "
            type="submit"
          >
            {language.sizeFormPage.submitButtonText}
          </button>
        </Form>
      </div>

      <div className="img-container">
        <img
          src={`/media/${gender}SizeImg-${language.languageKey}.png`}
          alt=""
        />
      </div>
    </div>
  );
}
