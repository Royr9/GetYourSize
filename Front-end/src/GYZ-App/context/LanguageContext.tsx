import { ReactNode, createContext, useContext, useState } from "react";

import en from "../database/locales/en.json";
import he from "../database/locales/he.json";

type LanguagesType = "en" | "he";
export default LanguagesType;

type LanguageContextType = {
  currentLanguage: LanguagesType;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<LanguagesType>>;
  language: typeof en | typeof he;
};

const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
);

export const LanguageContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguagesType>("he");
  const language = currentLanguage === "en" ? en : he;

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setCurrentLanguage, language }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const UseLanguageContext = () => {
  return useContext(LanguageContext);
};
