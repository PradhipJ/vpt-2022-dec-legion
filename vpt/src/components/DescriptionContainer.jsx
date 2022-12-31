import React from "react"
import "../styles/DescriptionContainer.css"

const DescriptionContainer = ({ desc, recommendation }) => {
  return (
    <div className="description-container">
      <p>{desc}</p>
    </div>
  )
}

export default DescriptionContainer
