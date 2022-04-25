import React, { useEffect, useState } from "react";
import "../css/changeTheme.css";

const ChangeTheme = () => {
  const [changedTheme, setChangedTheme] = useState(false);

  const darkTheme = () => {
    setChangedTheme(!changedTheme);
  };

  useEffect(() => {
    var element = document.body;
    element.classList.toggle("dark-theme");
  }, [changedTheme]);

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
