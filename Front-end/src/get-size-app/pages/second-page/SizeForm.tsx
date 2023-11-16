import { UseUserContext } from "../../../contexts/UserContext";
import { menInputs, womenInputs } from "../../database/inputs";
import { Form } from "react-router-dom";
import Logo from "../../../components/logo-comp/Logo";

import "./SizeForm.css";
import { UseLanguageContext } from "../../../contexts/LanguageContext";
import ChangeLanguageButton from "../../components/ChangeLanguageButton";

//icon
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Footer from "../../../components/footer-comp/Footer";

export default function SizeForm() {
  const { userData, setUserData } = UseUserContext();

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

  function directBack() {
    setUserData({
      userGender: undefined,
      userName: undefined,
      userSize: undefined,
    });
  }

  return (
    <div className="size-form-page">
      <div className="size-form-container">
        <span onClick={() => directBack()} className="back-btn">
          <ArrowBackIosIcon sx={{ fontSize: "2vw" }} />
          {language.sizeFormPage.backButton}
        </span>
        <ChangeLanguageButton />

        <Form className={gender} method="post" action="/app">
          <div className="logo-w-label">
            <Logo />
            <label className={language.languageKey}>
              {gender === "women"
                ? language.sizeFormPage.greetingsFemale
                : language.sizeFormPage.greetings}{" "}
              {name}
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
        <Footer />
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
