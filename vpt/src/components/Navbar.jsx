import { React, useState, useEffect } from "react"
import "../styles/Navbar.css"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import SearchIcon from "@mui/icons-material/Search"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const Navbar = ({ func, setIsFirstTime, setLimit, limit }) => {
  const [selected, setSelected] = useState(false)
  const [inputText, setInputText] = useState("")

  useEffect(() => {
    handleClick()
  }, [limit])

  const handleClick = () => {
    if (inputText.length == 0) return
    setIsFirstTime(false)
    func(inputText.toLowerCase())
  }

  return (
    <div className="nav-bar">
      {/* <input type="text" id="search-bar" placeholder="Search.." /> */}
      <TextField
        id="outline-bar"
        label="Search"
        variant="outlined"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick()
          }
        }}
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
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={limit}
        label="Content per page"
        onChange={(e) => {
          console.log(e.target.value)
          setLimit(e.target.value)
        }}
      >
        <MenuItem value={10}>10 Books/Page</MenuItem>
        <MenuItem value={25}>25 Books/Page</MenuItem>
        <MenuItem value={50}>50 Books/Page</MenuItem>
        <MenuItem value={100}>100 Books/Page</MenuItem>
      </Select>
    </div>
  )
}

export default Navbar
