import React from "react"
import "./cancel-button.scss"

const CancelButton = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick} className="btn--tertiary cancel-button">
            Cancel
        </button>
    )
}

export default CancelButton
