import React, { useEffect, useState } from "react"
import { getAvailableBooks } from "../../../services/on-available"
import BookCard from "../../organisms/book-card/book-card"
import "./available-books.scss"

const AvailableBooks = () => {

    const [hasError, setError] = useState(false)
    const [books, setBooks] = useState()

    useEffect(() => {
            .catch(() => {
                setError(true)
            })
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
            <If condition={hasError}>
                <div>Oh no, something went terribly wrong.</div>
            </If>
        </div>
    )
}

export default AvailableBooks
