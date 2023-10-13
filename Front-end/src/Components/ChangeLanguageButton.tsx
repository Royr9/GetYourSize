import { useEffect, useState } from "react";
import { UseLanguageContext } from "../context/LanguageContext";

export default function ChangeLanguageButton() {
  const { currentLanguage, setCurrentLanguage } = UseLanguageContext();

  useEffect(() => {
    if (currentLanguage === "he") {
      setButtonText("English");
    } else if (currentLanguage === "en") {
      setButtonText("עברית");
    }
  }, []);

  function toggleLanguage() {
    if (currentLanguage === "en") {
      setCurrentLanguage("he");
      setButtonText("English");
    } else if (currentLanguage === "he") {
      setCurrentLanguage("en");
      setButtonText("עברית");
    }
  }

  const [buttonText, setButtonText] = useState<"English" | "עברית">(
    "" as "English" | "עברית"
  );

  return (
    <span
      style={{
        position: "absolute",
        right: "2%",
        fontSize: "1.5vw",
        top: "2%",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={toggleLanguage}
    >
      {buttonText}
    </span>
  );
}
