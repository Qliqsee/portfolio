import React from "react"
import { useEffect, useState } from "react"
import "../styles/header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

export default function Header({ showMenu, setShowMenu, theme, setTheme }) {
  // showmenu function
  const truthy = () => {
    setShowMenu(!showMenu)
  }

  // change theme starts here
  const changeMode = () => {
    setTheme(!theme)
  }
  return (
    <div className="header">
      <div className="navigation">
        <div className="logo">Qliqsee.</div>
        <div className="mode" onClick={changeMode}>
          <FontAwesomeIcon icon={theme ? faSun : faMoon} />
        </div>
        <div
          className={`${showMenu ? "hamburger active" : "hamburger"}`}
          onClick={truthy}
        >
          <span className="line_1"></span>
          <span className="line_2"></span>
          <span className="line_3"></span>
        </div>
      </div>
    </div>
  )
}
