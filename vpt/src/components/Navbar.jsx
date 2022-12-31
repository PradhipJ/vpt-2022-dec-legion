import React from "react"
import "../styles/Navbar.css"
import TextField from "@mui/material/TextField"

const Navbar = () => {
  return (
    <div className="nav-bar">
      {/* <input type="text" id="search-bar" placeholder="Search.." /> */}
      <TextField
        id="outline-bar"
        label="Search"
        variant="outlined"
        color="warning"
      />
    </div>
  )
}

export default Navbar
