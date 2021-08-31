import React from "react"
import "../styles/avatar.scss"

export default function Avatar({ width, height }) {
  return (
    <div>
      <span
        className="roundedAvatar"
        style={{
          backgroundImage: 'url("./hacker.png")',
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></span>
    </div>
  )
}
