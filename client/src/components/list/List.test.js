import { fireEvent, render, screen } from "@testing-library/react";
import List from "./List";

const items = [
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

  const handleSelect = jest.fn()

test('render list', () => {

    render(<List items={items} handleSelect={handleSelect}/>)

    const item1 = screen.getByText('Abyssinian');
    expect(item1).toBeInTheDocument(); 

    const item2 = screen.getByText('Aegean');
    expect(item2).toBeInTheDocument(); 

    const item3 = screen.getByText('American Bobtail');
    expect(item3).toBeInTheDocument(); 
})

test('call handleSelect funciton on click', () => {

    render(<List items={items} handleSelect={handleSelect}/>)

    const item = screen.getByText('Abyssinian');
    expect(item).toBeInTheDocument(); 

    fireEvent.click(item)
    expect(handleSelect).toHaveBeenCalledTimes(1)

})