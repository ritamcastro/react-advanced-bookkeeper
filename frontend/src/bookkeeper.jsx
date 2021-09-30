import React from "react"
import { BrowserRouter } from "react-router-dom"
import Header from "./ui/molecules/header/header"
import Footer from "./ui/molecules/footer/footer"
import ModalProvider from "./hooks/use-modal/use-modal"
import "./bookkeeper.scss"
import FormModal from "./ui/templates/form-modal/form-modal"

const Bookkeeper = () => {

    return <BrowserRouter>
        <Header />
        <ModalProvider>
            <main>
                <p>We'll need books here</p>
            </main>
        </ModalProvider>
        <Footer />
    </BrowserRouter>
}

export default Bookkeeper
