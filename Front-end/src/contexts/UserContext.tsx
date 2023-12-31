import { ReactNode, createContext, useContext, useState } from "react";
import {
  GendersType,
  UserSizesArrayType,
} from "../get-size-app/types/AppTypes";

export type userDataType = {
  userName: string | undefined;
  userGender: GendersType | undefined;
  userSize: UserSizesArrayType | undefined;
};

type UserContextType = {
  userData: userDataType;
  setUserData: React.Dispatch<React.SetStateAction<userDataType>>;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UseUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<userDataType>({
    userName: undefined,
    userGender: undefined,
    userSize: undefined,
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
