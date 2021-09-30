
export const toHaveComponentCalledWith = (component, props) => {
    expect(component).toHaveBeenCalledWith(expect.objectContaining(props), {})
}

export const toHaveComponentNthCalledWith = (component, nthCall, props) => {
    expect(component).toHaveBeenNthCalledWith(nthCall, expect.objectContaining(props), {})
}
