import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./ui/molecules/header/header"
import Home from "./ui/pages/home/home"
import Footer from "./ui/molecules/footer/footer"
import ModalProvider from "./hooks/use-modal/use-modal"
import AvailableBooks from "./ui/pages/available-books/available-books"
import AddNewBook from "./ui/pages/add-book/add-new-book"
import "./bookkeeper.scss"

const Bookkeeper = () => {

    return <BrowserRouter>
        <Header />
        <ModalProvider>
            <main>
                <Switch>
                    <Route exact path="/available" render={() => <AvailableBooks />} />
                    <Route exact path="/add-new-book" render={() => <AddNewBook />} />
                    <Route exact path="/" render={() => <Home />} />
                </Switch>
            </main>
        </ModalProvider>
        <Footer />
    </BrowserRouter>
}

export default Bookkeeper
