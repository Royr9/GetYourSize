import { UseUserContext } from "../context/UserContext";
import { menInputs, womenInputs } from "../database/inputs";
import { Form } from "react-router-dom";
import Logo from "./Logo";

import "../css/SizeForm.css";
import { reloadPage } from "../Pages/GetYourSize";

export default function SizeForm() {
  const { userData } = UseUserContext();

  const { userGender: gender, userName: name } = userData;

  const inputs = gender === "men" ? menInputs : womenInputs;

  return (
    <div className="size-form-page">
      <span onClick={() => reloadPage()} className="back-btn">
        {"< Back"}
      </span>
      <div className="size-form-container">
        <Form className={gender} method="post" action="/app">
          <div className="logo-w-label">
            <Logo />
            <label htmlFor="">Welcome {name}</label>
          </div>
          <input type="text" hidden name="gender" value={gender} />
          {inputs.map((input) => {
            return (
              <div className="input-container">
                <label htmlFor="">{input}</label>
                <input type="number" name={input} />
              </div>
            );
          })}
          <button type="submit">Calculate my size</button>
        </Form>
      </div>

      <div className="img-container">
        <img src={`/media/${gender}SizeImgEng.png`} alt="" />
      </div>
    </div>
  );
}
