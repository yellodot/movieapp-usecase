import axios from 'axios';
import {useState, useEffect, useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar'
const movies = require('../data/movies.json')

function MovieList() {

  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}`;
  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();  
    setSearchValue(e.target.value)
    e.target.value = '';
  }

  const displayDetails = (id) => {
    navigate(`/movie/${id}`, { state: moviesList})
  }

  const handleFetchMovies = useCallback(() => {
    if (!searchValue) return;
    const delayDebounce = setTimeout(() => {
      console.log(searchValue)
      axios.get(`${BASE_URL}&query=${searchValue}`)
      .then(res => res.data)
      .then(data => {
        setMoviesList(data)
      })
      .catch((err) => console.log('Error', err));
    },3000)
    return () => clearTimeout(delayDebounce)
  }, [searchValue]);

  // essayer de fetcher quand l'utilisateur appuie sur entrée

  console.log('movielist', moviesList);

  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  return (
    <>
    <div className="flex flex-col w-screen sm:w-2/6 sm:h-screen sm:px-12 py-8 sm:overflow-y-auto bg-green-400 sm:rounded-lg">
        <div className='flex items-center'>
            <h1 className='text-white font-base text-4xl pr-4'>FLEET MOVIES</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="white">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
        </div>
        <SearchBar handleFetchMovies={handleFetchMovies} handleSearch={handleSearch} searchValue={searchValue} />
        <ul>
        { moviesList.length === 0 && <div className='text-white'>Start typing to see the movies !</div> }
        { moviesList.results && 
            moviesList.results.map((movie) =>
              <li  
              key={movie.id}
              className="cursor-pointer flex flex-col mb-4 py-2 mx-auto w-full items-center justify-center bg-white hover:bg-slate-200 rounded shadow">
                <div 
                onClick={() => displayDetails(movie.id)}
                className="font-medium">
                    {movie.title}
                </div>
              </li>
            )
        }
      </ul>
    </div>
    </>
  )
}

export default MovieList