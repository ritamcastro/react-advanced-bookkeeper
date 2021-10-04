import React from "react"
import { useHistory } from "react-router-dom"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { addBook } from "../../../services/add-book"
import Input from "../../molecules/formik/input/input"
import OkCancelButtons from "../../molecules/ok-cancel-buttons/ok-cancel-buttons"
import "./add-new-book.scss"

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please add the book title."),
    author: Yup.string().required("Please add the book author."),
    isbn: Yup.string()
        .matches(/\d{13}/gm, "Please provide the ISBN with 13 digits.")
        .required("Please provide the ISBN with 13 digits."),
    image: Yup.string(),
})

const AddNewBook = () => {
    const history = useHistory()

    const initialValues = {
        title: "",
        author: "",
        isbn: "",
        image: ""
    }

    return (
        <div className="add-new-book">
            <h1>Add new book</h1>
            <Formik
                initialValues={initialValues}
                validateOnChange={true}
                validateOnBlur={true}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    addBook(values).then(() => {
                        history.push("/")
                    })
                }}
            >
                {
                    ({ isValid, dirty }) => {
                        return (
                            <Form>
                                <div className="form-elements">
                                    <Input labelText="Title" labelId="title" placeholder="Death on the Nile" fieldName="title" />
                                    <Input labelText="Author" labelId="author" placeholder="Agatha Christie" fieldName="author" />
                                    <Input labelText="ISBN" labelId="isbn" placeholder="1234567890123" fieldName="isbn" />
                                    <Input labelText="Image Link" labelId="image" placeholder="eg. link to Google Books image" fieldName="image" />
                                </div>

                                <OkCancelButtons disabled={!(isValid && dirty)} onCancel={() => history.push("/")} />
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default AddNewBook
