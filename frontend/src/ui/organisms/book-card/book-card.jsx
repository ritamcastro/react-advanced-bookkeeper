
import React from "react"
import "./book-card.scss"

const BookCard = ({ book }) => {

    return (
        <div className="book-card">
            <img alt={book.title} src={book.image} />
        </div>
    )
}

export default BookCard
