import React from "react"
import { useLoadData } from "../../../hooks/use-load-data/use-load-data"
import { getAvailableBooksFixed } from "../../../services/on-available"
import BookCard from "../../organisms/book-card/book-card"
import "./available-books.scss"

const AvailableBooks = () => {

    const { status, data, error } = useLoadData(() => getAvailableBooksFixed())

    return (
        <div className="bookshelf">
            < Choose >
                <When condition={status == "pending"}>
                    <div>Loading...</div>
                </When>

                <When condition={status == "resolved"}>
                    <h1>Available books: {data.length}</h1>
                    <div className="books">
                        {
                            Object.values(data).map(book => (
                                <BookCard key={book.isbn} book={book} />
                            ))
                        }
                    </div>
                </When>

                <When condition={status == "rejected"}>
                    <div>Oh no, something went terribly wrong.</div>
                    <div>In particular, this: {error}</div>
                </When>
            </Choose >
        </div>
    )
}

export default AvailableBooks
