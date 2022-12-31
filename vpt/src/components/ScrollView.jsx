import React from "react"
import "../styles/ScrollView.css"

const ScrollView = ({ category }) => {
  return (
    <div className="scroll-view">
      <h1 className="category-title">{category}</h1>
    </div>
  )
}

export default ScrollView
