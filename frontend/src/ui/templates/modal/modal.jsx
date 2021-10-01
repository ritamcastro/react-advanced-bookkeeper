import React from "react"
import { createPortal } from "react-dom"
import { useModal } from "../../../hooks/use-modal/use-modal"
import IconButton from "../../../../all-src/ui/atoms/buttons/icon-button/icon-button"
import "./modal.scss"

const Modal = ({ title, children }) => {

    const { isVisible, setShowModal } = useModal()

    return (
        isVisible ?
            createPortal(
                <div className="modal">
                    <div className="modal-wrapper">
                        <div className="modal-header">
                            <div className="modal-title">
                                {title}
                            </div>
                            <div className="modal-close">
                                <IconButton src="../../../public/images/icons/close.svg"
                                    alt={"Close modal"}
                                    onClick={() => setShowModal(false)}
                                />
                            </div>
                        </div>

                        <div className="modal-content">
                            {children}
                        </div>
                    </div>
                </div>
                ,
                document.getElementById("bookkeeper-modal")
            )
            : null
    )
}

export default Modal
