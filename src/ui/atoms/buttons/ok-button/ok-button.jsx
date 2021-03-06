import React from "react"
import "./ok-button.scss"

const OkButton = (props) => {
    return (
        <button {...props} aria-label="OK" className="ok-button">
            OK
        </button >
    )
}

export default OkButton
