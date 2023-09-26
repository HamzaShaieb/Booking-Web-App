import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
    <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo">lamabooking</span>
      </Link>
    </div>
    </div>
  )
}
