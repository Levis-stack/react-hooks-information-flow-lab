import React from 'react'

function Header({isDarkMode, onDarkModeClick}) {
  return (
    <div>
      <div className={"App " + (isDarkMode ? "dark" : "light")}></div>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  )
}
export default Header