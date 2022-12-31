import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import BookItem from "./BookItem"
import "../styles/BookContainer.css"
import Pagination from "@mui/material/Pagination"

const BookContainer = () => {
  return (
    <div className="book-container">
      <BookItem
        imgSrc={
          "https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
        }
        title={"Some Random Book"}
        author={"Random author"}
        desc={"First Edition 1920"}
      />
      <BookItem
        imgSrc={
          "https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
        }
        title={"Some Random Book"}
        author={"Random author"}
        desc={"First Edition 1920"}
      />
      <BookItem
        imgSrc={
          "https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
        }
        title={"Some Random Book"}
        author={"Random author"}
        desc={"First Edition 1920"}
      />
      <BookItem
        imgSrc={
          "https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
        }
        title={"Some Random Book"}
        author={"Random author"}
        desc={"First Edition 1920"}
      />
      <BookItem
        imgSrc={
          "https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
        }
        title={"Some Random Book"}
        author={"Random author"}
        desc={"First Edition 1920"}
      />
      <BookItem
        imgSrc={
          "https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
        }
        title={"Some Random Book"}
        author={"Random author"}
        desc={"First Edition 1920"}
      />
      <BookItem
        imgSrc={
          "https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
        }
        title={"Some Random Book"}
        author={"Random author"}
        desc={"First Edition 1920"}
      />
      <BookItem
        imgSrc={
          "https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
        }
        title={"Some Random Book"}
        author={"Random author"}
        desc={"First Edition 1920"}
      />
      <Pagination
        count={10}
        color="warning"
        className="pagination"
        size="large"
        showFirstButton
        showLastButton
      />
    </div>
  )
}

export default BookContainer
