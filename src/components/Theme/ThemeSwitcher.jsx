import { useEffect, useState } from "react";
import "./ThemeSwitcher.css";
import PropTypes from "prop-types";

export default /* use client */ function ThemeSwitcher({ darkClassName }) {
  const ThemeSwitcher = ({ darkClassName }) => {
    // Initialize state with a default value, you could use false or true depending on your design choice
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      // Define a function that updates state based on the media query
      const updateDarkModePreference = () => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(prefersDarkMode);
      };

      // Call the function when the component mounts
      updateDarkModePreference();

      // Add listener for changes in the media query
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addListener(updateDarkModePreference);

      // Remove the listener when the component unmounts
      return () => mediaQuery.removeListener(updateDarkModePreference);
    }, []);

    useEffect(() => {
      const applyTheme = () => {
        const bodyClass = document.body.classList;
        if (isDarkMode) {
          bodyClass.add(darkClassName);
        } else {
          bodyClass.remove(darkClassName);
        }
      };

      applyTheme();
    }, [isDarkMode, darkClassName]);

    // Toggle between dark and light mode
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
      <div>
        <button
          onClick={toggleTheme}
          data-testid="themeSwitcherButton"
          className="btn" // Ensure this class is applied
        >
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    );
  };

  ThemeSwitcher.propTypes = {
    darkClassName: PropTypes.string,
  };

  ThemeSwitcher.defaultProps = {
    darkClassName: "dark",
  };
}
