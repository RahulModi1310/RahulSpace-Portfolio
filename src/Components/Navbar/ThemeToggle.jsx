import React, { useState } from "react";
import DarkThemeLogo from "../../assets/DarkThemeLogo.svg";
import LightThemeLogo from "../../assets/LightThemeLogo.svg";

import styles from "./ThemeToggle.module.css";
import { useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
  const themeSettings = {
    dark: {
      icon: DarkThemeLogo,
      class: "theme-dark",
    },
    light: {
      icon: LightThemeLogo,
      class: "theme-light",
    },
  };

  const root = document.getElementsByTagName("html")[0];
  useEffect(() => {
    root.classList.add(themeSettings[theme].class);
  }, [theme]);

  const toggleThemeHandler = () => {
    setTheme((prevState) => {
      root.classList.remove(themeSettings[prevState].class);
      if (prevState == "dark") return "light";
      else return "dark";
    });
  };

  return (
    <div>
      <button className={styles.toggleButton} onClick={toggleThemeHandler}>
        <img src={themeSettings[theme].icon} />
      </button>
    </div>
  );
};

export default ThemeToggle;
