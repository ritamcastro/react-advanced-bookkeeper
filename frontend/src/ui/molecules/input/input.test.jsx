import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Formik } from "formik"
import * as Yup from "yup"
import Input from "./input"

describe("Formik input", () => {

    // test for free text
    // test for email


    it("renders the input fields of type textbox without any label text", () => {
        render(
            <Formik>
                <>
                    <label id="possiblePokemons" >
                        First Gen or Second Gen?
                    </label>
                    <Input
                        labelId="possiblePokemons"
                        placeholder="Pikachu"
                        fieldName="1stGenPokemon"
                    />

                    <Input
                        labelId="possiblePokemons"
                        placeholder="Pichu"
                        fieldName="2ndGenPokemon"
                    />
                </>
            </Formik>
        )

        expect(screen.getByText("First Gen or Second Gen?")).toBeInTheDocument()
        expect(screen.getAllByLabelText("First Gen or Second Gen?")).toHaveLength(2)
        expect(screen.getByPlaceholderText("Pikachu")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Pichu")).toBeInTheDocument()
    })


    it("renders an input field of type textbox with its label", () => {
        render(
            <Formik>
                <Input
                    labelId="pokemon"
                    labelText="What is your favourite Pokemon?"
                    placeholder="Pikachu"
                    fieldName="pokemon"
                />
            </Formik>
        )

        expect(screen.getByText("What is your favourite Pokemon?")).toBeInTheDocument()
        expect(screen.getByLabelText("What is your favourite Pokemon?")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Pikachu")).toBeInTheDocument()
    })

    it("performs validations on the input and shows error messages", async () => {
        const validationSchema = Yup.object().shape({
            animal: Yup.string().min(3, "Not really an animal...")
        })

        render(
            <Formik
                initialValues={{ animal: "" }}
                validationSchema={validationSchema}
                validateOnBlur={true}
                validateOnChange={false}
            >
                <Input
                    labelId="animal"
                    labelText="What is your favourite Animal?"
                    placeholder="Lion"
                    fieldName="animal"
                />
            </Formik>
        )

        const input = screen.getByLabelText("What is your favourite Animal?")

        fireEvent.change(input, { target: { value: "pa" } })
        fireEvent.blur(input)

        expect(input).toHaveValue("pa")
        expect(screen.queryByText("Lion")).not.toBeInTheDocument()

        await waitFor(() => {
            expect(screen.getByText("Not really an animal...")).toBeInTheDocument()
        })

        fireEvent.change(input, { target: { value: "" } })
        fireEvent.blur(input)

        await waitFor(() => {
            expect(screen.queryByText("Not really an animal...")).not.toBeInTheDocument()
        })

        await waitFor(() => {
            expect(screen.queryByText("animal is a required field")).not.toBeInTheDocument()
        })

        fireEvent.change(input, { target: { value: "Peregrine" } })
        fireEvent.blur(input)

        await waitFor(() => {
            expect(input).toHaveValue("Peregrine")
        })
    })
})
