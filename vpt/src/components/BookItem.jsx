import { React, useState } from "react"
import "../styles/BookItem.css"
import DescriptionContainer from "./DescriptionContainer"
import { getBookDetails } from "../FetchAPI"

const BookItem = ({ imgSrc, title, author, desc, getKey }) => {
  const [show, setShow] = useState(false)
  const [json, setJson] = useState({})

  console.log(getKey)

  getBookDetails(getKey, async (element1, element2) => {
    console.log(element1, element2[0])
    setJson({ element1, element2 })
  })

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
      {show && (
        <DescriptionContainer
          desc={json.element1}
          recommendation={json.element2}
        />
      )}
    </>
  )
}

export default BookItem
