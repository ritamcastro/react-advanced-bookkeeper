const bookkeeperFetch = (url, options = {}) =>
    fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        }
    })

export default bookkeeperFetch
