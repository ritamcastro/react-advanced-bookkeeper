import { render } from "@testing-library/react"
import React from "react"
import SaveButton from "./ok-button"
import BasicButton from "../../../atoms/buttons/basic-button/basic-button"
import { toHaveComponentCalledWith } from "../../../../utils/test/jest-extension"
import { mockComponent } from "../../../../utils/test/mocks"
import getClassnames from "../../../../utils/test/get-classnames"

jest.mock("../../../atoms/buttons/basic-button/basic-button", () => ({
    __esModule: true,
    default: jest.fn()
}))

describe("Save button", () => {
    it("shows the Save button, propagates props, and calls the onClick function", () => {

        const clickFn = jest.fn()
        const buttonProps = mockComponent(BasicButton)

        render(<SaveButton onClick={clickFn} fakeprop="888" test="test" />)

        toHaveComponentCalledWith(BasicButton, {
            fakeprop: "888",
            test: "test",
            children: "Save"
        })

        const buttonClasses = getClassnames(buttonProps)
        expect(buttonClasses).toHaveLength(2)
        expect(buttonClasses).toContain("btn--primary")
        expect(buttonClasses).toContain("save-button")

        buttonProps.onClick()
        expect(clickFn).toHaveBeenCalled()
    })
})
