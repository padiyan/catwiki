import { render, screen } from "@testing-library/react";
import Error from "./Error";
import { ErrorContext } from "../../context/error";

const errorMessage = 'Error occured'
const error = { error: errorMessage, setError: jest.fn() }

test('display error message', () => {
    render(
        <ErrorContext.Provider value={({...error})}>
            <Error />
        </ErrorContext.Provider>)
    const errorText = screen.getByText(`${errorMessage} Please try later`)
    expect(errorText).toBeInTheDocument();
})
