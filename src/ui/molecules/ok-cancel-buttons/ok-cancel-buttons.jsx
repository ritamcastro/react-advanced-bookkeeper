import React from "react"
import CancelButton from "../../atoms/buttons/cancel-button/cancel-button"
import OkButton from "../../atoms/buttons/ok-button/ok-button"
import "./ok-cancel.scss"

const OkCancelButtons = ({ disabled, onCancel }) => {
    return (
        <div className="action-buttons">
            <CancelButton onClick={onCancel} />
            <OkButton type="submit" disabled={disabled} />
        </div>
    )
}

export default OkCancelButtons
