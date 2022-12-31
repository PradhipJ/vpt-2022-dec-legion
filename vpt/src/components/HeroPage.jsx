import { React, useState } from "react"
import "../styles/HeroPage.css"
import Navbar from "./Navbar"
import BookContainer from "./BookContainer"
import Footer from "./Footer"

const HeroPage = () => {
  const [query, setQuery] = useState("shakespeare")

  return (
    <section className="hero-section">
      <Navbar func={setQuery} />
      <BookContainer query={query} />
    </section>
  )
}

export default HeroPage
