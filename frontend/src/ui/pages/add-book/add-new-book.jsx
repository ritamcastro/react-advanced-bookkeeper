import React from "react"
import "./add-new-book.scss"

const AddNewBook = () => {
    return (
        <div className="add-new-book">
            <h1>Add New booK</h1>

            <label htmlFor="title">tItlE</label>
            <input type="text" id="title" placeholder="Death on the Nile" />

            <label htmlFor="author">Author</label>
            <input type="text" id="author" placeholder="Agatha Christie" />

            <button>Cancel</button>
            <button disabled>OK</button>
        </div>
    )
}

export default AddNewBook
