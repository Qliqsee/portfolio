import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faEye } from "@fortawesome/free-solid-svg-icons"
import "../styles/card.scss"

export default function Card() {
  return (
    <div className="card">
      <div className="c_section_1">
        <div className="title">Porfolio</div>
        <span>React + Styled Components</span>
      </div>
      <div className="c_section_2">
        <span>Sign up portal for Checkmate Africa community</span>
      </div>
      <div className="c_section_3">
        <div className="live">
          <span>
            <FontAwesomeIcon icon={faEye} />
          </span>{" "}
          Live
        </div>
        <div className="code">
          <span>
            <FontAwesomeIcon icon={faCodeBranch} /> Code
          </span>
        </div>
      </div>
    </div>
  )
}
