import "./GenderForm.css";

import Logo from "../../../components/logo/Logo";
import { useRef, useState } from "react";
import { GendersType } from "../../types/AppTypes";
import { UseUserContext } from "../../context/UserContext";
import ChangeLanguageButton from "../../components/ChangeLanguageButton";
import { UseLanguageContext } from "../../context/LanguageContext";
import Footer from "../../../components/footer/Footer";

export default function GenderForm() {
  //context
  const { setUserData } = UseUserContext();

  const { language } = UseLanguageContext();
  //states
  const [selectedUserName, setSelectedUserName] = useState("");

  const [selectedUserGender, setSelectedUserGender] = useState<GendersType>(
    {} as GendersType
  );

  //ref
  const menBtnRef = useRef<HTMLButtonElement>(null);
  const womenBtnRef = useRef<HTMLButtonElement>(null);

  ////// functions //////
  const handleGenderSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name } = e.currentTarget;

    if (name === "womenButton") {
      womenBtnRef.current?.classList.add("active-btn");
      menBtnRef.current?.classList.remove("active-btn");
      setSelectedUserGender("women");
    } else {
      womenBtnRef.current?.classList.remove("active-btn");
      menBtnRef.current?.classList.add("active-btn");

      setSelectedUserGender("men");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedUserName(value);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData({
      userGender: selectedUserGender,
      userName: selectedUserName,
      userSize: undefined,
    });
  };

  ////// ////// render  ////// //////
  return (
    <div className="form-page">
      <div className="gender-form-container">
        <ChangeLanguageButton />
        <form onSubmit={submitForm}>
          <div className="logo-w-label">
            <Logo />
          </div>
          <div className="input-w-label-container">
            <label className={language.languageKey}>
              {language.firstPage.nameInputLabel}
            </label>
            <input
              className="input"
              onChange={handleInputChange}
              type="text"
              name="user-name"
            />
          </div>

          <div className="btn-input-w-label-container">
            <label className={language.languageKey}>
              {language.firstPage.genderInputLabel}
            </label>
            <div className="btns-div">
              <button
                className="btn-input"
                onClick={handleGenderSelection}
                ref={menBtnRef}
                name="menButton"
              >
                {language.firstPage.maleGender}
              </button>
              <button
                className="btn-input"
                ref={womenBtnRef}
                onClick={handleGenderSelection}
                name="womenButton"
              >
                {language.firstPage.femaleGender}
              </button>
            </div>
          </div>

          <button className="app-btn btn-full " type="submit">
            {language.firstPage.genderFormSubmitButton}
          </button>
        </form>
        <Footer />
      </div>

      <div className="img-container">
        <img src="/media/cubes.png" alt="" />
      </div>
    </div>
  );
}
