import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "./Search";
import { LoadingContext } from "../../context/context";
import { ErrorContext } from "../../context/context";

const breeds = [
    {
      "id": "abys",
      "name": "Abyssinian",
      "image": {
        "id": "0XYvRd7oD",
        "width": 1204,
        "height": 1445,
        "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
      }
    },
    {
      "id": "aege",
      "name": "Aegean",
      "image": {
        "id": "ozEvzdVM-",
        "width": 1200,
        "height": 800,
        "url": "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"
      }
    },
    {
      "id": "abob",
      "name": "American Bobtail",
      "image": {
        "id": "hBXicehMA",
        "width": 1600,
        "height": 951,
        "url": "https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
      }
    },
  ]

const loading = { loading: true, setLoading: jest.fn() }
const error = { error: null, setError: jest.fn() }

test('render input field', () => {

    render(
        <LoadingContext.Provider value={({...loading})}>
            <ErrorContext.Provider value={({...error})}>
                <Search />
            </ErrorContext.Provider>
        </LoadingContext.Provider>)

    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
})

test('load item list', () => {

    const setStateMock = jest.fn();
    jest. spyOn (React, 'useState').mockImplementationOnce(() => [[...breeds], setStateMock]);

    render(
        <LoadingContext.Provider value={({...loading, loading: false})}>
            <ErrorContext.Provider value={({...error})}>
                <Search />
            </ErrorContext.Provider>
        </LoadingContext.Provider>)

    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, {target: {value: 'a'}})
    waitFor(() => {
        const item = screen.getByText('American Bobtail');
        expect(item).toBeInTheDocument(); 
    })

    fireEvent.change(searchInput, {target: {value: 'ar'}})
    waitFor(() => {
        const item = screen.getByText('American Bobtail');
        expect(item).not.toBeInTheDocument(); 
    })
})