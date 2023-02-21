import { render, screen } from '@testing-library/react';
import CatWiki from './CatWiki';
import { LoadingContext } from '../context/loading';
import { ErrorContext } from '../context/error';

const loading = { loading: true, setLoading: jest.fn() }
const error = { error: null, setError: jest.fn() }

test('renders Search input field', () => {
  render(<CatWiki />);
  const searchInput = screen.getByPlaceholderText("Search");
  expect(searchInput).toBeInTheDocument();
});

test('renders loading message', () => {
    render(
        <LoadingContext.Provider value={({...loading})}>
            <ErrorContext.Provider value={({...error})}>
                <CatWiki />
            </ErrorContext.Provider>
        </LoadingContext.Provider>)

    const loadingText = screen.getByText("Loading......");
    expect(loadingText).toBeInTheDocument();
});
