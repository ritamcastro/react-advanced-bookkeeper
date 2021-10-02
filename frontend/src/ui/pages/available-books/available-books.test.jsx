import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import AvailableBooks from "./available-books"
import { getAvailableBooks } from "../../../services/on-available"
import factory from "../../../utils/test/factory"

jest.mock("../../../services/on-available", () => ({
    getAvailableBooks: jest.fn()
}))

describe("Bookshelf of available books", () => {
    it("shows us the loaded books", async () => {
        const book = factory.book()
        getAvailableBooks.mockResolvedValueOnce([book])

        render(<AvailableBooks />)

        await waitFor(() => {
            expect(getAvailableBooks).toHaveBeenCalled()
        })
        expect(screen.getByAltText(book.title)).toBeInTheDocument()
    })
})
