import React from "react"
import Operation from "../../templates/operation/operation"
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Operation to="add-new-book" src="../../../../public/images/icons/upload.svg">
                Add a new book
            </Operation>

            <Operation to="available" src="../../../../public/images/icons/leave.svg">
                Borrow a book
            </Operation>
        </div>
    )
}

export default Home
