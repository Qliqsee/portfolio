import React, { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import "../styles/layout.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  const [theme, setTheme] = useState(false)

  return (
    <div className="main_layout">
      <div
        className={`${showMenu ? "layout hide" : "layout"} ${
          theme ? "" : "dark"
        }`}
      >
        <div className="section_1">
          <Header
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            theme={theme}
            setTheme={setTheme}
          />
        </div>
        <div className="section_2">{children}</div>
        <div className="section_3">
          <Footer />
        </div>
      </div>
      <div
        className={`${showMenu ? "slider" : "slider hide"} ${
          theme ? "" : "dark"
        }`}
      >
        <div className="section_1">
          <Header
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            theme={theme}
            setTheme={setTheme}
          />
        </div>
        <div className="section_2">
          <div className="navz">
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="socialz">
            <div className="socialz_text">
              <span>Connect with me.</span>
            </div>
            <div className="socialz_icons">
              <span className="github">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span className="twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
