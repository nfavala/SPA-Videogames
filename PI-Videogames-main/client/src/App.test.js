// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders a button to enter', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Play/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe("unit-test", () => {
    it("renders the right component with following path '/home'", () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/home']}>
                <App></App>
            </MemoryRouter>
        )

        let Home = getByTestId("home-component")

        expect(Home).toBeInTheDocument()
    })
})