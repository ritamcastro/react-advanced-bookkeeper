import faker from "faker"

const book = () => {
    return {
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        isbn: faker.internet.password(13, false, /[0-9]/),
        image: faker.internet.url(),
        title: faker.lorem.sentence()
    }
}

export default {
    book
}
