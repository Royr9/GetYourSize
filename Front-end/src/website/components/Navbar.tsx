import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { UseDeviceSizeContext } from "../../contexts/DeviceSizeContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

type NavbarPropsType = {
  logo: React.ReactNode;
  menuPages?: string[];
  buttonElement?: boolean;
};

export default function Navbar({
  logo,
  menuPages,
  buttonElement,
}: NavbarPropsType) {
  const { setIsAppOpen } = useAppContext();

  const { deviceSize } = UseDeviceSizeContext();

  const [isMenuOpen, setIsToggleMenu] = useState(false);

  function renderNav() {
    if (deviceSize === "mobile") {
      return (
        <nav className="mobile">
          {logo}

          <MenuIcon
            onClick={() => setIsToggleMenu(!isMenuOpen)}
            sx={{ fontSize: 50, color: "white" }}
          />
          {isMenuOpen && (
            <menu className="open-menu animate--fast appear-smooth">
              <MenuIcon
                onClick={() => setIsToggleMenu(!isMenuOpen)}
                sx={{
                  fontSize: 50,
                  color: "black",
                  position: "relative",
                  top: "1vh",
                }}
              />
              <div className="menu-items ">
                {menuPages?.map((pageLink, index) => {
                  if (pageLink === "Try The App") {
                    if (buttonElement) {
                      return (
                        <NavLink
                          to={"/"}
                          onClick={() => {
                            setIsAppOpen((prevValue) => !prevValue);
                            setIsToggleMenu(!isMenuOpen);
                          }}
                        >
                          {pageLink}
                        </NavLink>
                      );
                    }
                  } else
                    return (
                      <NavLink
                        onClick={() => {
                          setIsToggleMenu(!isMenuOpen);
                        }}
                        key={index}
                        to={pageLink === "Home" ? "/" : pageLink.toLowerCase()}
                      >
                        {pageLink}
                      </NavLink>
                    );
                })}
              </div>
            </menu>
          )}
        </nav>
      );
    } else {
      return (
        <nav className="desktop">
          {logo}
          <menu>
            {menuPages?.map((pageLink, index) => {
              if (pageLink === "Try The App") {
                if (buttonElement) {
                  return (
                    <NavLink
                      to={"/"}
                      onClick={() => setIsAppOpen((prevValue) => !prevValue)}
                    >
                      {pageLink}
                    </NavLink>
                  );
                }
              } else
                return (
                  <NavLink
                    key={index}
                    to={pageLink === "Home" ? "/" : pageLink.toLowerCase()}
                  >
                    {pageLink}
                  </NavLink>
                );
            })}
          </menu>
        </nav>
      );
    }
  }

  return <header>{renderNav()}</header>;
}
