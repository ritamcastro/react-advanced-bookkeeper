import fetch from "./fetch-service"

export const getAvailableBooks = () => {
    return fetch("/api/books/?is_available=true")
        .then(res => res.json())
        .then(body => body.data)
}

export const getAvailableBooksFixed = () => new Promise(function (resolve, reject) {
    resolve([
        {
            author: "Uncle Bob",
            image: "https://books.google.pt/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70ODv8SdGgVuhy26iZYreNVqYfjmRbb6hl2BW7zheolNtAFXZ3XZgHm2uvDQ1gYmKoU4DvxrhnUqSM-9PsP7hltR4DrmRbNIme8SwSi0bP_KfcvQ4edIo4VIOS69371UcPUUkG3",
            isbn: "9780136083252",
            link: "https://www.goodreads.com/book/show/3735293-clean-code",
            title: "Clean Code"
        },
        {
            author: "Agatha Christie",
            image: "https://books.google.pt/books/content?id=SuZEL04vBhwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72k3HSUYOl1lFTKN5nePMGfruYdnvgvwslNygNAIeTk3wIATpC_BXUp6hymikygNQXrlZ1dcyWKrD9PhjLbk63yZu29FfZ1J8yvDaE9FlPp5Pfm5jVmMbwVRqD_Sl7oF9xR0g0v",
            isbn: "9781579126896",
            link: "https://www.goodreads.com/book/show/131359.Death_on_the_Nile",
            title: "Death on the Nile"
        },
        {
            author: "Douglas Adams",
            image: "https://books.google.pt/books/content?id=j24GMN0OtS8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72hHHbTKBJFW819EwFQxoLL7BuI2FgDTJ07nmysfqxUn0WjKxq75kHNbpCJ05Dz6zfjubTISbqwDw4CnvE2ziNg7B8LFs5Ibfz3le2SvUIcOb817SSlfjjBDFixOm4kkghu6x7w",
            isbn: "9780132350884",
            link: "https://www.goodreads.com/book/show/386162.The_Hitchhiker_s_Guide_to_the_Galaxy",
            title: "Clean Code"
        },
        {
            author: "Terry Pratchett, Neil Gaiman",
            image: "https://books.google.pt/books/content?id=FsN0mxNThYIC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE717zT9Fa0JgNZo14ERLHrXo1S4DIhHeWt8P9sUeFIkZegTtGhihgA_DU1jV1aw08ljAFs5ftBnCk0qfzUCma1sai_geQgR_0sDEtufy71sEKae75Q5PRbt9xARlXgbezFeo-iy8",
            isbn: "9780060853969",
            link: "https://www.goodreads.com/book/show/12067.Good_Omens",
            title: "Good Omens"
        },

    ])
    reject("💩")
})
