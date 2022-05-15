import axios from 'axios';
import {useState, useEffect, useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar'

function Home() {

  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}`;
  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [url, setUrl] = useState(`${BASE_URL}&query=${searchValue}`);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();  
    setSearchValue(e.target.value)
  }

  // fetch the right url when user presses 'enter'
  const handleSearchSubmit = (e) => {
    setUrl(`${BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`);
    e.preventDefault();
  }

  // function for fetching movies in the api if url has changed (submit)
  const handleFetchMovies = useCallback(() => {
    if (!searchValue) return;
    axios.get(`${BASE_URL}&query=${searchValue}`)
    .then(res => res.data)
    .then(data => {
      setMoviesList(data);
    })
    .then(setSearchValue(''))
    .catch((err) => console.log('Error', err));
  }, [url]);


  // fetch api only when url changes in previous function
  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  const displayDetails = (id) => {
    navigate(`/movie/${id}`);
    if (window.innerWidth < 650)    
    { 
      window.scrollTo({
        left: 0,
        top: window.innerHeight,
        behavior: "smooth",
      }
    )}
  }

  return (
    
    <>
    <div className="flex flex-col w-screen md:w-2/6 md:px-12 h-full md:h-screen py-8 px-8 md:overflow-y-auto bg-gradient-to-r from-sky-500 to-indigo-500 md:rounded-lg">
        <div className='flex flex-col pb-4 text-white'>
            <h1 className=' font-extrabold text-4xl pr-4 pb-2 md:text-3xl'>Welcome to Fleet Movies.</h1>
            <h2 className='font-normal'>What movie are you looking for ?</h2>
        </div>
        <SearchBar handleSearchSubmit={handleSearchSubmit} handleSearch={handleSearch} searchValue={searchValue} />
        <ul className='overflow-scroll h-max'>
        { 
          moviesList.results &&
            moviesList.results.map((movie) =>
              <li  
              key={movie.id}
              className="cursor-pointer flex flex-col mb-4 py-2 px-2 mx-auto w-full items-center justify-center bg-white hover:bg-slate-200 rounded shadow">
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

export default Home