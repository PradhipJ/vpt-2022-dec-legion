import { React, useEffect, useState } from "react"
import BookItem from "./BookItem"
import "../styles/BookContainer.css"
import Pagination from "@mui/material/Pagination"
import { getSearchResultByBookAndAuthor } from "../FetchAPI"

const BookContainer = ({ query }) => {
  const [noOfPages, setNoOfPages] = useState(0)
  const [results, setResults] = useState(null)
  const [currentPage, setCurerntPage] = useState(1)

  useEffect(() => {
    getSearchResultByBookAndAuthor(query, query, currentPage, (results) => {
      setResults(results)
      console.log(results)
    })
  }, [currentPage])

  return !results ? (
    <p>Loading</p>
  ) : (
    <>
      <div className="book-container">
        {results &&
          results.result.map((res) => (
            <BookItem
              imgSrc={res.imageURL}
              title={res.title}
              author={res.authors.join(", ")}
              desc={"First Edition " + res.first_edition}
            />
          ))}
      </div>

      {results && (
        <>
          <Pagination
            count={results.num_pages}
            color="warning"
            className="pagination"
            size="large"
            showFirstButton
            showLastButton
          />
        </>
      )}
    </>
  )
}

export default BookContainer
