import React, { useEffect, useState } from "react"
import { getAvailableBooks } from "../../../services/on-available"
import BookCard from "../../organisms/book-card/book-card"
import "./available-books.scss"

const AvailableBooks = () => {

    const [books, setBooks] = useState()

    useEffect(() => {
        getAvailableBooks().then(setBooks)
    }, [])

    return (
        <div className="bookshelf">
            <div className="books">
                {
                    Object.values(books || []).map(book => (
                        <BookCard key={book.isbn} book={book} />
                    ))
                }
            </div>
        </div>
    )
}

export default AvailableBooks
