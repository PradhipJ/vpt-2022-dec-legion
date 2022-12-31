import { React, useState } from "react"
import "../styles/BookItem.css"
import DescriptionContainer from "./DescriptionContainer"

const BookItem = ({ imgSrc, title, author, desc }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="book-item" onClick={() => setShow(!show)}>
        <img src={imgSrc} key={title} className="book-image" />
        <div className="desc-container">
          <h1 className="book-title">{title}</h1>
          <h1 className="book-author">{author}</h1>
          <p>{desc}</p>
        </div>
      </div>
      {show && <DescriptionContainer />}
    </>
  )
}

export default BookItem
