import { React, useEffect, useState } from "react"
import BookItem from "./BookItem"
import "../styles/BookContainer.css"
import Pagination from "@mui/material/Pagination"
import { getSearchResultByBookAndAuthor } from "../FetchAPI"
import loading2 from "../assets/loading2.gif"
import loading1 from "../assets/loading1.gif"

const BookContainer = ({ query, isFirstTime, limit, visible, setVisible }) => {
  const [results, setResults] = useState(null)
  const [currentPage, setCurerntPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
    if (isFirstTime) return
    getSearchResultByBookAndAuthor(
      query,
      query,
      currentPage,
      limit,
      (results) => {
        setResults(results)
        setLoading(true)
        console.log(results)
      }
    )
  }, [query, currentPage, limit])

  return isFirstTime ? (
    <div className="loading-parent">
      <img src={loading2} alt="Loading" className="loading first-time" />
      <i>Search to find books</i>
    </div>
  ) : !loading ? (
    <div className="loading-parent">
      <img src={loading1} alt="Loading" className="loading circle" />
    </div>
  ) : (
    <>
      <div className="book-container">
        {loading &&
          results &&
          results.result.map((res) => (
            <BookItem
              imgSrc={res.imageURL}
              title={res.title}
              author={res.authors.join(", ")}
              desc={"First Edition " + res.first_edition}
              getKey={res.key}
            />
          ))}
      </div>
      <Pagination
        count={results.num_pages}
        color="warning"
        className="pagination"
        size="large"
        page={currentPage}
        onChange={(event, value) => {
          setCurerntPage(value)
          setLoading(true)
        }}
        showFirstButton
        showLastButton
      />
    </>
  )
}

export default BookContainer
