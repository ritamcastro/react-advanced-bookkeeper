import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import AvailableBooks from "./available-books"
import { getAvailableBooks } from "../../../services/on-available"
import factory from "../../../utils/test/factory"
import faker from "faker"

jest.mock("../../../services/on-available", () => ({
    getAvailableBooks: jest.fn()
}))

describe("Bookshelf of available books", () => {
    it("shows us the 'loading' screen and then the loaded books", async () => {
        const book = factory.book()
        getAvailableBooks.mockResolvedValueOnce([book])

        render(<AvailableBooks />)

        expect(screen.getByText("Loading...")).toBeInTheDocument()

        await waitFor(() => {
            expect(getAvailableBooks).toHaveBeenCalled()
        })
        expect(screen.getByAltText(book.title)).toBeInTheDocument()
    })

    it("shows us an error if the books can not be loaded ", async () => {
        const error = faker.hacker.phrase()
        getAvailableBooks.mockRejectedValueOnce(error)

        render(<AvailableBooks />)

        await waitFor(() => {
            expect(getAvailableBooks).toHaveBeenCalled()
        })
        expect(screen.getByText("Oh no, something went terribly wrong.")).toBeInTheDocument()
    })
})
