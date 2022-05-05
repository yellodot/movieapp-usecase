import {useState} from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
const movies = require('../data/movies.json')

function SearchMovie() {

  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState(movies.results);

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const searchedMovie = moviesList.filter(movie =>
    movie.title.toLowerCase().includes(searchValue)
  )

  return (
    <>
    <div className="flex flex-col w-screen sm:w-2/6 sm:h-screen sm:px-12 py-8 sm:overflow-y-auto bg-green-400 sm:rounded-lg">
        <div className='flex items-center'>
            <h1 className='text-white font-base text-4xl pr-4'>FLEET MOVIES</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="white">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
        </div>
        <SearchBar handleSearch={handleSearch} searchValue={searchValue} />
        <MovieList movies={searchedMovie} />
    </div>
    </>
  )
}

export default SearchMovie