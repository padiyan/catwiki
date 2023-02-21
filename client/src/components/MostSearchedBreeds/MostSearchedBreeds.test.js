import { render, screen } from "@testing-library/react";
import MostSearchedBreeds from "./MostSearchedBreeds";

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

test('display heading', () => {

    render(<MostSearchedBreeds breeds={breeds}/>)

    const heading = screen.getByText('Most Searched Breeds');
    expect(heading).toBeInTheDocument(); 

})

test('display most searched breeds', () => {

    render(<MostSearchedBreeds breeds={breeds}/>)

    const breed1 = screen.getByAltText('Abyssinian');
    expect(breed1).toBeInTheDocument(); 

    const breed2 = screen.getByAltText('Aegean');
    expect(breed2).toBeInTheDocument(); 

    const breed3 = screen.getByAltText('American Bobtail');
    expect(breed3).toBeInTheDocument(); 

})