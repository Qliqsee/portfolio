import React, { useEffect, useRef } from "react"
import Avatar from "../components/Avatar"
import "../styles/home.scss"
import { init } from "ityped"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/Layout"

export default function Home() {
  // ityped animation start
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Software Engineer.", "Frontend Web Developer."],
    })
  }, [])
  // // ityped animation ends

  return (
    <Layout>
      <div className="home">
        <div className="section_1">
          <div className="big_avatar">
            <Avatar className="big_avatar" width={200} height={200} />
          </div>
          <div className="small_avatar">
            <Avatar className="small_avatar" width={100} height={100} />
          </div>
        </div>
        <div className="section_2">
          <div className="title">Hello, I'm Agboola Iyanu</div>
          <div className="role">
            <span ref={textRef}></span>
          </div>
          <div className="description">
            <p>
              I'm a <span>frontend developer</span>. I create{" "}
              <span>interactive experiences </span>
              for amazing people using <span>technology</span>. I enjoy tweaking
              stylesheets and crafting layouts to <span>achieve</span> desireds
              aesthetics.
            </p>
          </div>
          <div className="explore">
            <span>
              Explore{" "}
              <FontAwesomeIcon className="right_icon" icon={faCaretRight} />
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
