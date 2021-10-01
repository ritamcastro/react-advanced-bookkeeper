import { useEffect, useReducer } from "react"

/**
 * Calls `fetchData` and re-calls it if any of the values within the
 * `dependencies` array change.
 *
 * Returns an object with three fields: `status`, `data`, and `error`. `status`
 * is one of `pending`, `resolved`, or `rejected`. If the status is `resolved`,
 * then `data` is the result of the promise returned by `fetchData`. If the
 * status is `rejected`, then `error` is the error thrown by `fetchData`.
 *
 * It is the responsibility of the caller of `useLoadData` to correctly set the
 * `dependencies` array. That probably means giving it any data needed inside
 * `fetchData`.
 */
export const useLoadData = (fetchData, dependencies = []) => {

    const [{ status, data, error }, dispatch] = useReducer(fetchDataReducer, {
        status: undefined,
        data: null,
        error: undefined
    })

    const load = () => {
        const fetchPromise = fetchData()

        dispatch({
            status: "pending",
        })

        fetchPromise.then(result => {
            dispatch({
                status: "resolved",
                data: result
            })
        })
            .catch((err) => {
                dispatch({
                    status: "rejected",
                    data: null,
                    error: err
                })
            })
    }

    const reload = () => load()

    useEffect(load, dependencies)  // eslint-disable-line react-hooks/exhaustive-deps
    // ESLint will complain that useEffects' dependencies are (1) not an array
    // literal, and (2) missing fetchData. Regarding Point 1, it is the
    // responsibility of the caller of `useLoadData` to correctly set the
    // `dependencies` array. ESLint isn't smart enough to check that, so it
    // complains, and we ignore that. :)
    // Point 2 is a false positive, it's a function and so it changing doesn't
    // need to trigger the useEffect.

    return { status, data, error, reload }
}

const fetchDataReducer = (state, action) => {
    switch (action.status) {
        case "pending": {
            return {
                ...state,
                status: action.status
            }
        }

        case "resolved": {
            return {
                ...state,
                status: action.status,
                data: action.data
            }
        }

        case "rejected": {
            return {
                ...state,
                status: action.status,
                error: action.error
            }
        }
    }
}
