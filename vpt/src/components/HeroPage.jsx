import { React, useState } from "react"
import "../styles/HeroPage.css"
import Navbar from "./Navbar"
import BookContainer from "./BookContainer"
import Footer from "./Footer"

const HeroPage = () => {
  const [limit, setLimit] = useState(25)
  const [query, setQuery] = useState("")
  const [isFirstTime, setIsFirstTime] = useState(true)

  return (
    <section className="hero-section">
      <Navbar
        func={setQuery}
        setIsFirstTime={setIsFirstTime}
        setLimit={setLimit}
        limit={limit}
      />
      <BookContainer query={query} isFirstTime={isFirstTime} limit={limit} />
    </section>
  )
}

export default HeroPage
