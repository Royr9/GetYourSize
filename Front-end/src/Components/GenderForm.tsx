import { Form } from "react-router-dom";
import "../css/GenderForm.css";
import Logo from "./Logo";
import { useRef, useState } from "react";
import { GendersType } from "../types/AppTypes";
import { UseUserContext } from "../context/UserContext";

export default function GenderForm() {
  //context

  const { userData, setUserData } = UseUserContext();

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
    });
  };

  ////// ////// render  ////// //////
  return (
    <div className="form-page">
      <div className="gender-form-container">
        <form onSubmit={submitForm}>
          <div className="logo-w-label">
            <Logo />
            <label htmlFor="">Welcome to our app</label>
          </div>
          <div className="name-input">
            <label htmlFor="">Enter Your Name</label>
            <input onChange={handleInputChange} type="text" name="user-name" />
          </div>

          <div className="gender-input">
            <label htmlFor="">Choose Your Gender</label>
            <button
              onClick={handleGenderSelection}
              ref={menBtnRef}
              name="menButton"
            >
              Men
            </button>
            <button
              ref={womenBtnRef}
              onClick={handleGenderSelection}
              name="womenButton"
            >
              Women
            </button>
          </div>

          <button className="app-btn btn-full " type="submit">
            Let's Start
          </button>
        </form>
      </div>

      <div className="img-container">
        <img src="/media/cubes.png" alt="" />
      </div>
    </div>
  );
}
