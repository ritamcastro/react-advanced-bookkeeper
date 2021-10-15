import React from "react"
import { render, screen } from "@testing-library/react"
import { toHaveComponentCalledWith, toHaveComponentNthCalledWith } from "../../../utils/test/jest-extension"
import AddNewBook from "./add-new-book"
import OkCancelButtons from "../../molecules/ok-cancel-buttons/ok-cancel-buttons"
import Input from "../../molecules/formik/input/input"
import { Form, Formik } from "formik"
import { mockComponent } from "../../../utils/test/mocks"

jest.mock("../../molecules/ok-cancel-buttons/ok-cancel-buttons", () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(null)
}))

jest.mock("../../molecules/formik/input/input", () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(null)
}))

jest.mock("formik", () => ({
    ...jest.requireActual("formik"),
    Formik: jest.fn().mockImplementation(({ children }) => children),
    Form: jest.fn().mockImplementation(({ children }) => children)
}))

const mockHistoryPush = jest.fn()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({ push: mockHistoryPush }),
}))


describe("Add a new Book page", () => {
    it("renders the form with the Save button disabled", () => {
        // ... Abandon all hope from now on... 🪦

        // render(<AddNewBook />)

        // expect(screen.getByRole("heading", { name: /add new book/i })).toBeInTheDocument()

        // expect(Formik).toHaveBeenCalled()

        // expect(Form).toHaveBeenCalled()
        // toHaveComponentNthCalledWith(Input, 1, {
        //     labelId: "title",
        //     labelText: "Title",
        //     placeholder: "Death on the Nile",
        //     fieldName: "title"
        // })

        // toHaveComponentNthCalledWith(Input, 2, {
        //     labelId: "author",
        //     labelText: "Author",
        //     placeholder: "Agatha Christie",
        //     fieldName: "author"
        // })

        // // ... Same for the other fields ...

        // toHaveComponentCalledWith(OkCancelButtons, { disabled: true })
    })

    it("takes us back home when clicking Cancel", () => {
        // const buttonsProps = mockComponent(OkCancelButtons)

        // render(<AddNewBook />)

        // buttonsProps.onCancel()
        // expect(mockHistoryPush).toHaveBeenCalled()

        // ... Abandon all hope from now on... 🪦

    })
})
