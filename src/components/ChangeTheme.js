import React, { useState } from "react";
import "../css/changeTheme.css";

const ChangeTheme = () => {
  const [changedTheme, setChangedTheme] = useState(false);

  const darkTheme = () => {
    var element = document.body;
    element.classList.toggle("dark-theme");
    setChangedTheme(!changedTheme);
  };

  return (
    <div>
      <i
        onClick={darkTheme}
        className={`bx change-theme ${changedTheme ? "bx-moon" : "bx-sun"}`}
        id="theme-button"
      ></i>
    </div>
  );
};

export default ChangeTheme;
