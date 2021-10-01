const bookkeeperFetch = (url, options = {}) =>
    fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        }
    }).then((resp) => {
        if (resp.status === 401) {
            window.location.replace(`${window.location.protocol}//${window.location.host}/auth`)
        }
        return resp
    })


export default bookkeeperFetch
