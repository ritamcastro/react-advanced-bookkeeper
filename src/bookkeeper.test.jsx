import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Bookkeeper from "./bookkeeper"
import factory from "./utils/test/factory"

global.fetch = jest.fn()

describe("SDC:LX Bookkeeper", () => {
    it("allows Bob to add a new book to the library", async () => {
        global.fetch.mockResolvedValueOnce({})

        render(<Bookkeeper />)

        const addBook = screen.getByLabelText("Add a new book")
        userEvent.click(addBook)

        expect(screen.getByRole("heading", { name: "Add new book" })).toBeInTheDocument()

        const book = factory.book()
        fillAddBookForm(book)
        userEvent.click(screen.getByLabelText("OK"))

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith("/api/books",
                expect.objectContaining({
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                    body: JSON.stringify({ book: book })
                })
            )
        })

        expect(screen.getByLabelText("Add a new book")).toBeInTheDocument()
        expect(screen.getByLabelText("Borrow a book")).toBeInTheDocument()
    })
})


const fillAddBookForm = (book) => {

    const titleInput = screen.getByRole("textbox", { name: "Title" })
    userEvent.type(titleInput, book.title)

    const authorInput = screen.getByRole("textbox", { name: "Author" })
    userEvent.type(authorInput, book.author)

    const isbnInput = screen.getByRole("textbox", { name: "ISBN" })
    userEvent.type(isbnInput, book.isbn)

    const imageInput = screen.getByRole("textbox", { name: "Image Link" })
    userEvent.type(imageInput, book.image)
}
