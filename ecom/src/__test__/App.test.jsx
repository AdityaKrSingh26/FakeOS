import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders Navbar component', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument(); // Assuming 'home' text is in Navbar
});

test('renders Home page by default', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByText(/home page content/i)).toBeInTheDocument(); // Replace with actual text in Home component
});

test('navigates to Cart page', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/cart/i)); // Assuming 'cart' text is in Navbar
    expect(screen.getByText(/cart page content/i)).toBeInTheDocument(); // Replace with actual text in Cart component
});

test('navigates to Product Description page', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/product/i)); // Assuming 'product' text is in Navbar
    expect(screen.getByText(/product description content/i)).toBeInTheDocument(); // Replace with actual text in ProductDescription component
});