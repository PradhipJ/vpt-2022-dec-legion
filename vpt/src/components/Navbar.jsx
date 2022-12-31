import { React, useState, useEffect } from "react"
import "../styles/Navbar.css"
import TextField from "@mui/material/TextField"
import ToggleButton from "@mui/material/ToggleButton"
import Button from "@mui/material/Button"
import BuildIcon from "@mui/icons-material/Build"
import SearchIcon from "@mui/icons-material/Search"

const Navbar = ({ func }) => {
  const [selected, setSelected] = useState(false)
  const [inputText, setInputText] = useState("")

  const handleClick = () => {
    func(inputText.toLowerCase())
  }

  return (
    <div className="nav-bar">
      {/* <input type="text" id="search-bar" placeholder="Search.." /> */}
      <TextField
        id="outline-bar"
        label="Search"
        variant="outlined"
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleClick}
        className="search-button"
      >
        <SearchIcon />
      </Button>
      {/* <ToggleButton
        value="advSearch"
        selected={selected}
        onChange={() => {
          setSelected(!selected)
        }}
      >
        <BuildIcon />
      </ToggleButton> */}
    </div>
  )
}

export default Navbar
