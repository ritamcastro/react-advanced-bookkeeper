import React from "react"
import { Link } from "react-router-dom"
import "./operation.scss"

const Operation = ({ to, src, alt, children }) => {
    return (
        <div className="operation">
            <img alt={alt} src={src} height="72px" width="72px" />

            <Link to={to}>
                <span className="operation-btn">
                    {children}
                </span>
            </Link>
        </div>
    )
}

export default Operation
