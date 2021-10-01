import React from "react"
import OkCancelButtons from "../../molecules/ok-cancel-buttons/ok-cancel-buttons"
import Modal from "../modal/modal"
import "./form-modal.scss"


const FormModal = ({ title, onCancel, children }) => {
    // const { setShowModal } = useModal()


    return (
        <>

            {children}
            < OkCancelButtons disabled onCancel={onCancel} />

        </>
    )
}

export default FormModal
