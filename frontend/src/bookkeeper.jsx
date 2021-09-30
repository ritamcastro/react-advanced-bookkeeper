import React from "react"
import { BrowserRouter } from "react-router-dom"
import Header from "./ui/molecules/header/header"
import Footer from "./ui/molecules/footer/footer"
import ModalProvider from "./hooks/use-modal/use-modal"
import "./bookkeeper.scss"
import FormModal from "./ui/templates/form-modal/form-modal"
import AddNewBook from "./ui/pages/add-book/add-new-book"

const Bookkeeper = () => {

    return <BrowserRouter>
        <Header />
        <ModalProvider>
            <main>
                <AddNewBook />
            </main>
        </ModalProvider>
        <Footer />
    </BrowserRouter>
}

export default Bookkeeper
