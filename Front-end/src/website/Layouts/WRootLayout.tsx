import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../../GYZ-App/components/Footer/Footer";
import "./RootStyles.css";
import Navbar from "../components/navbar/Navbar";
import Logo from "../../GYZ-App/components/Logo/Logo";
import { UseDeviceSizeContext } from "../Context/DeviceSizeContext";
import { AppContextProvider } from "../Context/AppContext";

export const year = new Date().getFullYear();

const menuPages = ["Home", "Try The App", "Contact"];

export default function WRootLayout() {
  const { deviceSize } = UseDeviceSizeContext();
  console.log(deviceSize);

  return (
    <AppContextProvider>
      <div className="WRootLayout-container">
        <Navbar
          menuPages={menuPages}
          logo={<Logo size={deviceSize === "mobile" ? "bigger" : "small"} />}
          buttonElement={true}
        />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppContextProvider>
  );
}
