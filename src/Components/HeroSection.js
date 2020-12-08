import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center",
        minHeight: '100vh',
      }}
    >
      <h1 style={{textAlign: 'center'}}>Theme Toggler</h1>
      <h1>Context API theme toggler</h1>
      <p>Sample Paragraph Text</p>
      <button
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
        style={{
          cursor: 'pointer',
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currectTheme.border}`
        }} 
        
      >
       {themeMode === "light" ? "Turn on Dark Mode" : "Turn on Light Mode"}
      </button>
    </div>
  );
};

export default HeroSection;
