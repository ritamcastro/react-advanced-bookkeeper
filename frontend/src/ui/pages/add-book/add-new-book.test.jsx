import React from "react"
import { render, screen } from "@testing-library/react"
import AddNewBook from "./add-new-book"

describe("Add a new Book page", () => {
    it("renders the form with the Save button disabled", () => {
        render(<AddNewBook />)

        expect(screen.getByRole("heading", { name: /add new book/i })).toBeInTheDocument()

        expect(screen.getByLabelText(/title/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/death on the nile/i)).toBeInTheDocument()

        expect(screen.getByLabelText("Author")).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/agatha christie/i)).toBeInTheDocument()

        // ... Same for the other fields ...

        const cancelBtn = screen.getByRole("button", { name: "Cancel" })
        expect(cancelBtn).toBeInTheDocument()

        const okBtn = screen.getByRole("button", { name: "OK" })
        expect(okBtn).toBeInTheDocument()
        expect(okBtn).toBeDisabled()
    })
})
