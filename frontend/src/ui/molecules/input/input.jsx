import React from "react"
import "./input.scss"

const Input = ({ type = "text", labelId, labelText, placeholder }) => {

    return (
        <div className="input-field">
            <label htmlFor={labelId}>{labelText}</label>
            <input type={type} id={labelId} placeholder={placeholder} />
        </div>
    )
}

export default Input



// import { ErrorMessage, Field, useField } from "formik"

// const [, meta] = useField(fieldName)
    // const styling = `input-field ${(meta.error && meta.touched) ? " is-danger" : ""}`

    // return (
    //     <div className={styling}>
    //         <If condition={labelText}>
    //             <label id={labelId}>{labelText}</label>
    //         </If>
    //         <Field aria-labelledby={labelId} type={type} name={fieldName} placeholder={placeholder} />
    //         <ErrorMessage name={fieldName} component="small" />
    //     </div>
    // )
