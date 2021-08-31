import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "../styles/footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="section_1">
        <div className="icons">
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
      <div className="section_2">
        <span>Inspired By</span> Collins Enebeli
      </div>
    </div>
  )
}
