import React from "react"
import { render, screen } from "@testing-library/react"
import { toHaveComponentCalledWith, toHaveComponentNthCalledWith } from "../../../utils/test/jest-extension"
import AddNewBook from "./add-new-book"
import OkCancelButtons from "../../molecules/ok-cancel-buttons/ok-cancel-buttons"
import Input from "../../molecules/input/input"
import { Form, Formik } from "formik"

jest.mock("../../molecules/ok-cancel-buttons/ok-cancel-buttons", () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(null)
}))

jest.mock("../../molecules/input/input", () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(null)
}))

jest.mock("formik", () => ({
    ...jest.requireActual("formik"),
    Formik: jest.fn().mockImplementation(({ children }) => children),
    Form: jest.fn().mockImplementation(({ children }) => children)
}))

describe("Add a new Book page", () => {
    it("renders the form with the Save button disabled", () => {
        render(<AddNewBook />)

        expect(screen.getByRole("heading", { name: /add new book/i })).toBeInTheDocument()

        expect(Formik).toHaveBeenCalled()
        expect(Form).toHaveBeenCalled()

        toHaveComponentNthCalledWith(Input, 1, {
            labelId: "title",
            labelText: "Title",
            placeholder: "Death on the Nile"
        })

        toHaveComponentNthCalledWith(Input, 2, {
            labelId: "author",
            labelText: "Author",
            placeholder: "Agatha Christie"
        })

        // ... Same for the other fields ...

        toHaveComponentCalledWith(OkCancelButtons, { disabled: true })
    })
})
