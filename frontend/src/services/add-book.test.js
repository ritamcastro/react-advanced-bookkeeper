import factory from "../utils/test/factory"
import fetch from "./fetch-service"
import { addBook } from "./add-book"

jest.mock("./fetch-service", () => ({
    __esModule: true,
    default: jest.fn()
}))

describe("Services to add books to the library", () => {
    it("calls the endpoint to add the book", async () => {
        const book = factory.book()

        await addBook(book)

        expect(fetch).toHaveBeenCalledWith("/api/books", {
            method: "POST",
            body: JSON.stringify({ book: book })
        })
    })
})
