import logo from "../../public/img/logoR.png";
import sunLogo from "../../public/img/sun.svg";
import moonLogo from "../../public/img/moon.svg";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleOnClick = () => {
    if (darkMode === false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  if (typeof document === "undefined") {
  } else {
    let body = document.querySelector("body");

    console.log(body.classList);

    if (darkMode === false) {
      body.classList.remove("darkMode");
    }

    if (darkMode === true) {
      body.classList.add("darkMode");
    }
  }
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <button>
          <img
            src={!darkMode ? sunLogo : moonLogo}
            alt="dark mode button"
            onClick={handleOnClick}
          />
        </button>
      </header>
    </>
  );
};

export default Header;
