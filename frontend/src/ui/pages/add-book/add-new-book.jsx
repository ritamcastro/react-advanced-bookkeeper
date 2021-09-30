import React from "react"
import Input from "../../molecules/input/input"
import OkCancelButtons from "../../molecules/ok-cancel-buttons/ok-cancel-buttons"
import "./add-new-book.scss"

const AddNewBook = () => {
    return (
        <div className="add-new-book">
            <h1>Add new book</h1>

            <Input labelId="title" labelText="Title" placeholder="Death on the Nile" />
            <Input labelId="author" labelText="Author" placeholder="Agatha Christie" />

            <OkCancelButtons disabled={true} />
        </div>
    )
}

export default AddNewBook
