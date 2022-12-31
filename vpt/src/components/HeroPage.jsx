import React from "react"
import "../styles/HeroPage.css"
import Navbar from "./Navbar"
import BookContainer from "./BookContainer"
import Footer from "./Footer"

const HeroPage = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <BookContainer />
    </section>
  )
}

export default HeroPage
