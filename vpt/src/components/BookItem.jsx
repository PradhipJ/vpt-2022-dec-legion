import React from "react"
import "../styles/BookItem.css"
import defaultImg from "../assets/testImg.jpg"

const BookItem = ({ title, author, imgSrc, desc }) => {
  return (
    <div className="book-item">
      <img
        src={imgSrc}
        alt={title}
        key={title}
        className="book-image"
        onerror={`if (this.src != ${defaultImg}) this.src = ${defaultImg}`}
      />
      <div className="desc-container">
        <h1 className="book-title">{title}</h1>
        <h1 className="book-author">{author}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default BookItem
