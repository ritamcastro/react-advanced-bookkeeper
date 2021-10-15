import { act, renderHook } from "@testing-library/react-hooks"
import faker from "faker"
import { mockManuallyResolvedValue } from "../../../../tests/utils/mocks"
import { useLoadData } from "./use-fetch-data-atomic"

describe("Hook to load data", () => {

    it("fails to load the data and shows error", async () => {
        const fetchMyData = jest.fn()
        const error = faker.lorem.sentence()
        fetchMyData.mockRejectedValueOnce(error)

        const { result, waitForNextUpdate } = renderHook(
            () => useLoadData(fetchMyData)
        )

        // Followed this documentation:
        // https://react-hooks-testing-library.com/usage/advanced-hooks#async
        await waitForNextUpdate()

        expect(fetchMyData).toBeCalledTimes(1)
        expect(result.current.status).toEqual("rejected")
        expect(result.current.data).toEqual(null)
        expect(result.current.error).toEqual(error)
    })

    it("is in a pending state and then successfully loads the data", async () => {
        const fetchMyData = jest.fn()

        const resolveFetchMyData = mockManuallyResolvedValue(fetchMyData, {
            instrument: "guitar",
            brand: "fender"
        })

        const { result, waitForNextUpdate } = renderHook(() =>
            useLoadData(fetchMyData)
        )

        expect(result.current.status).toEqual("pending")

        resolveFetchMyData()

        // Followed this documentation:
        // https://react-hooks-testing-library.com/usage/advanced-hooks#async
        await waitForNextUpdate()

        expect(fetchMyData).toBeCalledTimes(1)
        expect(result.current.status).toEqual("resolved")
        expect(result.current.data).toEqual({
            instrument: "guitar",
            brand: "fender"
        })
        expect(result.current.error).toEqual(undefined)
    })

    it("receives some parameters as dependencies to fetch", async () => {
        const fetchMyData = jest.fn()
        const resolveFetchMyData = mockManuallyResolvedValue(fetchMyData, {
            instrument: "guitar",
            brand: "fender"
        })

        let dependency = "old string"
        let otherDependency = "a new string"

        const { result, waitForNextUpdate, rerender } = renderHook(() =>
            useLoadData(fetchMyData, [dependency, otherDependency])
        )

        expect(result.current.status).toEqual("pending")

        resolveFetchMyData()
        await waitForNextUpdate()

        expect(result.current.status).toEqual("resolved")

        dependency = "new string"
        rerender()

        expect(result.current.status).toEqual("pending")
        await waitForNextUpdate()

    })

    it("provides a way to trigger a reload", async () => {
        const fetchMyData = jest.fn()
        const resolveFetchMyData = mockManuallyResolvedValue(fetchMyData, {
            instrument: "guitar",
            brand: "fender"
        })

        const { result, waitForNextUpdate } = renderHook(() =>
            useLoadData(fetchMyData)
        )

        expect(result.current.status).toEqual("pending")

        resolveFetchMyData()
        await waitForNextUpdate()

        expect(result.current.status).toEqual("resolved")

        // Reload once
        act(() => { result.current.reload() })
        expect(result.current.status).toEqual("pending")

        resolveFetchMyData()
        await waitForNextUpdate()
        expect(result.current.status).toEqual("resolved")

        // Reload twice
        act(() => { result.current.reload() })
        expect(result.current.status).toEqual("pending")

        resolveFetchMyData()
        await waitForNextUpdate()
        expect(result.current.status).toEqual("resolved")
    })
})
