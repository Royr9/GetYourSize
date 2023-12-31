import { Outlet } from "react-router-dom";
import Footer from "../../app_components/Footer";
import "./RootStyles.css";
import Navbar from "../../app_components/Navbar";
import Logo from "../../app_components/Logo";

import { AppContextProvider } from "../../contexts/AppContext";

export const year = new Date().getFullYear();

const menuPages = ["Home", "Try The App", "Contact"];

export default function RootLayout() {
  return (
    <AppContextProvider>
      <div className="WRootLayout-container">
        <Navbar menuPages={menuPages} logo={<Logo />} buttonElement={true} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppContextProvider>
  );
}

// lalalaa
