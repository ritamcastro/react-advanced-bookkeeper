import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AddNewBook from "./add-new-book"
import { Formik, Form } from "formik"

const mockHistoryPush = jest.fn()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({ push: mockHistoryPush }),
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

    it("calls the service to add a new book when submitting", () => {

    })
})
