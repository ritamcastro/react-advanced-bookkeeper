import React from "react"
import { render } from "@testing-library/react"
import CancelButton from "./cancel-button"
import { toHaveComponentCalledWith } from "../../../../utils/test/jest-extension"
import BasicButton from "../../../atoms/buttons/basic-button/basic-button"
import { mockComponent } from "../../../../utils/test/mocks"
import getClassnames from "../../../../utils/test/get-classnames"

jest.mock("../../../atoms/buttons/basic-button/basic-button", () => ({
    __esModule: true,
    default: jest.fn()
}))

describe("Cancel button", () => {
    it("shows the Cancel button and calls its onClick function", () => {
        const clickFn = jest.fn()
        const buttonProps = mockComponent(BasicButton)

        render(<CancelButton onClick={clickFn} />)

        toHaveComponentCalledWith(BasicButton, {
            type: "button",
            children: "Cancel"
        })

        const buttonClasses = getClassnames(buttonProps)
        expect(buttonClasses).toHaveLength(2)
        expect(buttonClasses).toContain("btn--tertiary")
        expect(buttonClasses).toContain("cancel-button")

        buttonProps.onClick()
        expect(clickFn).toHaveBeenCalled()
    })
})
