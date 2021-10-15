// import React from "react"
// import { render, screen } from "@testing-library/react"
// import { toHaveComponentCalledWith } from "../../../utils/test/jest-extension"
// import { mockComponent } from "../../../utils/test/mocks"
// import Modal from "../modal/modal"
// import OkCancelButtons from "../../molecules/ok-cancel-buttons/ok-cancel-buttons"
// import FormModal from "./form-modal"

// jest.mock("../modal/modal", () => ({
//     __esModule: true,
//     default: jest.fn().mockImplementation(({ children }) => children)
// }))

// jest.mock("../../molecules/ok-cancel-buttons/ok-cancel-buttons", () => ({
//     __esModule: true,
//     default: jest.fn().mockReturnValue(null)
// }))


describe("Form modal template, but with mocks... 😏", () => {
    it("renders the modal template, let's us click the cancel button and has the save one disabled", () => {
        // //         const onCancel = jest.fn()
        // //         const buttons = mockComponent(OkCancelButtons)

        // //         render(
        // //             <FormModal title="Your Form Modal" onSave={jest.fn()} onCancel={onCancel}>
        // //                 <div>Hi. Let us begin :)</div>
        // //             </FormModal>
        // //         )

        // //         toHaveComponentCalledWith(Modal, { title: "Your Form Modal" })

        // //         expect(screen.getByText("Hi. Let us begin :)")).toBeInTheDocument()

        // //         toHaveComponentCalledWith(OkCancelButtons, { disabled: true, onCancel: onCancel })

        // //         buttons.onCancel()
        // //         expect(onCancel).toHaveBeenCalledTimes(1)
    })
})
