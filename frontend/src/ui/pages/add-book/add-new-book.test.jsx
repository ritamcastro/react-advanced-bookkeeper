import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import faker from "faker"
import { addBook } from "../../../services/add-book"
import AddNewBook from "./add-new-book"

const mockHistoryPush = jest.fn()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({ push: mockHistoryPush }),
}))

jest.mock("../../../services/add-book", () => ({
    addBook: jest.fn()
}))

describe("Add a new Book page", () => {
    it("renders the form with the Save button disabled", () => {
        render(<AddNewBook />)

        expect(screen.getByRole("heading", { name: /add new book/i })).toBeInTheDocument()

        expect(screen.getByLabelText(/title/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/death on the nile/i)).toBeInTheDocument()

        // ... Same for the other fields ...

        const cancelBtn = screen.getByRole("button", { name: "Cancel" })
        expect(cancelBtn).toBeInTheDocument()

        const okBtn = screen.getByRole("button", { name: "OK" })
        expect(okBtn).toBeInTheDocument()
        expect(okBtn).toBeDisabled()
    })
    it("takes us back home when clicking Cancel", () => {
        render(<AddNewBook />)

        const cancelBtn = screen.getByRole("button", { name: "Cancel" })
        expect(cancelBtn).toBeInTheDocument()

        userEvent.click(cancelBtn)

        expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    })

    const bookFactory = () => {
        return {
            title: faker.lorem.sentence(),
            author: `${faker.name.firstName()} ${faker.name.lastName()}`,
            isbn: faker.internet.password(13, false, /[0-9]/),
            image: faker.internet.url()
        }
    }

    it("successfully calls the service to add a new book when submitting and takes us back home", async () => {
        const book = bookFactory()
        addBook.mockResolvedValueOnce()

        render(<AddNewBook />)

        const okButton = screen.getByLabelText("OK")
        expect(okButton).toBeDisabled()

        const titleInput = screen.getByRole("textbox", { name: "Title" })
        await userEvent.type(titleInput, book.title)

        const authorInput = screen.getByRole("textbox", { name: "Author" })
        await userEvent.type(authorInput, book.author)

        // ... Fill it all up...

        const isbnInput = screen.getByRole("textbox", { name: "ISBN" })
        await userEvent.type(isbnInput, book.isbn)

        const imageInput = screen.getByRole("textbox", { name: "Image Link" })
        await userEvent.type(imageInput, book.image)

        expect(okButton).toBeEnabled()

        userEvent.click(okButton)

        await waitFor(() => {
            expect(addBook).toHaveBeenCalledWith(book)
        })

        expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    })
})
