import React from "react"
import "../styles/BookItem.css"

const BookItem = ({ title, author, imgSrc, desc }) => {
  return (
    <div className="book-item">
      <img src={imgSrc} key={title} className="book-image" />
      <div className="desc-container">
        <h1 className="book-title">{title}</h1>
        <h1 className="book-author">{author}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default BookItem
