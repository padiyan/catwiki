import { render, screen } from "@testing-library/react";
import BreedPhotos from "./BreedPhotos";

const breedPhotos = [
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

test('render heading', () => {
    render(<BreedPhotos breedPhotos={breedPhotos}/>)

    const image1 = screen.getByAltText('d55E_KMKZ');
    expect(image1).toBeInTheDocument(); 

    const image2 = screen.getByAltText('8r4M61iyS');
    expect(image2).toBeInTheDocument(); 

    const image3 = screen.getByAltText('hBXicehMA');
    expect(image3).toBeInTheDocument(); 

    const image4 = screen.getByAltText('gVrhv_yAY');
    expect(image4).toBeInTheDocument(); 

    const image5 = screen.getByAltText('vH0bd0YDH');
    expect(image5).toBeInTheDocument(); 

    const image6 = screen.getByAltText('r_njVlaSz');
    expect(image6).toBeInTheDocument(); 

})