import React from "react";
import { render, screen } from "@testing-library/react"
import Breed from "./Breed"
import { LoadingContext } from "../../context/loading";
import { ErrorContext } from "../../context/error";

const breed = {
    "weight": {
      "imperial": "7 - 16",
      "metric": "3 - 7"
    },
    "id": "abob",
    "name": "American Bobtail",
    "cfa_url": "http://cfa.org/Breeds/BreedsAB/AmericanBobtail.aspx",
    "vetstreet_url": "http://www.vetstreet.com/cats/american-bobtail",
    "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/american-bobtail",
    "temperament": "Intelligent, Interactive, Lively, Playful, Sensitive",
    "origin": "United States",
    "country_codes": "US",
    "country_code": "US",
    "description": "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    "life_span": "11 - 15",
    "indoor": 0,
    "lap": 1,
    "alt_names": "",
    "adaptability": 5,
    "affection_level": 5,
    "child_friendly": 4,
    "dog_friendly": 5,
    "energy_level": 3,
    "grooming": 1,
    "health_issues": 1,
    "intelligence": 5,
    "shedding_level": 3,
    "social_needs": 3,
    "stranger_friendly": 3,
    "vocalisation": 3,
    "experimental": 0,
    "hairless": 0,
    "natural": 0,
    "rare": 0,
    "rex": 0,
    "suppressed_tail": 1,
    "short_legs": 0,
    "wikipedia_url": "https://en.wikipedia.org/wiki/American_Bobtail",
    "hypoallergenic": 0,
    "reference_image_id": "hBXicehMA",
    "image": {
      "id": "hBXicehMA",
      "width": 1600,
      "height": 951,
      "url": "https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
    },
    "photo": {
      "id": "8r4M61iyS",
      "url": "https://cdn2.thecatapi.com/images/8r4M61iyS.jpg"
    },
    "photos": [
      {
        "id": "d55E_KMKZ",
        "url": "https://cdn2.thecatapi.com/images/d55E_KMKZ.jpg"
      },
      {
        "id": "8r4M61iyS",
        "url": "https://cdn2.thecatapi.com/images/8r4M61iyS.jpg"
      },
      {
        "id": "hBXicehMA",
        "url": "https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
      },
      {
        "id": "gVrhv_yAY",
        "url": "https://cdn2.thecatapi.com/images/gVrhv_yAY.jpg"
      },
      {
        "id": "vH0bd0YDH",
        "url": "https://cdn2.thecatapi.com/images/vH0bd0YDH.jpg"
      },
      {
        "id": "r_njVlaSz",
        "url": "https://cdn2.thecatapi.com/images/r_njVlaSz.jpg"
      }
    ]
  }

  const loading = { loading: true, setLoading: jest.fn() }
  const error = { error: null, setError: jest.fn() }

test('Render loader component while loading', () => {

    const setStateMock = jest.fn();
    jest. spyOn (React, 'useState').mockImplementationOnce(() => [{...breed}, setStateMock]);
    render(
    <LoadingContext.Provider value={({...loading})}>
        <ErrorContext.Provider value={({...error})}>
            <Breed />
        </ErrorContext.Provider>
    </LoadingContext.Provider>)
    const loadingComponent = screen.getByText('Loading......')
    expect(loadingComponent).toBeInTheDocument(); 
})

test('Render Breed details', () => {

    const setStateMock = jest.fn();
    jest. spyOn (React, 'useState').mockImplementationOnce(() => [{...breed}, setStateMock]);
    render(
    <LoadingContext.Provider value={({...loading, loading: false })}>
        <ErrorContext.Provider value={({...error})}>
            <Breed />
        </ErrorContext.Provider>
    </LoadingContext.Provider>)

    const image = screen.getByAltText('American Bobtail');
    expect(image).toBeInTheDocument(); 

    const description = screen.getByText('American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.');
    expect(description).toBeInTheDocument();

    const temperament = screen.getByText('Intelligent, Interactive, Lively, Playful, Sensitive');
    expect(temperament).toBeInTheDocument();

    const origin = screen.getByText('United States');
    expect(origin).toBeInTheDocument(); 

    const lifeSpan = screen.getByText('11 - 15');
    expect(lifeSpan).toBeInTheDocument();

})
