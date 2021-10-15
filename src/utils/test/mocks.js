export const mockComponent = (component, display = (props) => props.children || null) => {
    const compProps = {}
    component.mockImplementation((props) => {
        Object.assign(compProps, props)
        return display(props)
    })
    return compProps
}
