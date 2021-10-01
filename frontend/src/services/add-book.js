import fetch from "./fetch-service"

export const addBook = (book) => {
    return fetch("/api/books", {
        method: "POST",
        body: JSON.stringify({
            book: {
                author: book.author,
                isbn: book.isbn,
                image: book.image,
                title: book.title
            }
        })
    })
}
