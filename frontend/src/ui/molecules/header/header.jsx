import React from "react"
import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
    return (
        <header className="bookkeeper-header">
            <Link to="/">
                <img alt="Home" src="public/images/books.svg" height="32" width="32" />
                <span className="bookkeeper-header-title">SDC:LX Bookkeeper</span>
            </Link>
        </header>
    )
}

export default Header
