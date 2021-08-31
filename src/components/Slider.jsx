import React from "react"
import "../styles/slider.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default function Slider({}) {
  return (
    <div className="sliders active">
      <div className="the_head">
        <div className="toggle">
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
      <div className="navigationz">
        <span>Home</span>
        <span>Work</span>
        <span>Resume</span>
        <span>Contact</span>
      </div>
      <div className="socialz">
        <div className="socialz_text">
          <span className="textz">Connect with me</span>
        </div>
        <div className="iconz">
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
  )
}
