import fetch from "./fetch-service"

export const getAvailableBooks = () => {
    return fetch("/api/books/?is_available=true")
        .then(res => res.json())
        .then(body => body.data)
}
