import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FormModal from "./form-modal"


describe("Form modal template", () => {
    it("renders the modal template, let's us click the cancel button and has the save one disabled", () => {
        const onCancel = jest.fn()
        render(
            <FormModal title="Your Form Modal"
                onSave={jest.fn()}
                onCancel={onCancel}
            >
                <div>Hi. Let us begin :)</div>
            </FormModal>
        )

        expect(screen.getByRole("heading", { name: "Your Form Modal" })).toBeInTheDocument()
        expect(screen.getByText("Hi. Let us begin :)")).toBeInTheDocument()

        const cancelBtn = screen.getByRole("button", { name: "Cancel" })
        expect(cancelBtn).toBeInTheDocument()
        userEvent.click(cancelBtn)
        expect(onCancel).toHaveBeenCalledTimes(1)

        const saveBtn = screen.getByRole("button", { name: "Save" })
        expect(saveBtn).toBeInTheDocument()
        expect(saveBtn).toBeDisabled()
    })
})
