import { render, screen } from "@testing-library/react";
import Scale from "./Scale"

test('display 5 point scale', () => {
    render(<Scale />)
    new Array(5).fill(0).forEach((_, index) => {
        expect(screen.getByTestId(`point-${index + 1}`)).toBeInTheDocument(); 
    })
})