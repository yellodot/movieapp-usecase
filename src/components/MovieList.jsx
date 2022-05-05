import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function MovieList({movies}) {

  const navigate = useNavigate();

  const displayMovieDetails = (id) => {
    navigate(`/movie/${id}`);
  }

  return (
    <div>
      <ul>
        {movies && 
          movies.map((movie) =>
            <div className="cursor-pointer flex flex-col mb-4 py-2 mx-auto w-full items-center justify-center bg-white hover:bg-slate-200 rounded shadow">
              <div 
              className="font-medium">
                  {movie.title}
              </div>
            </div>
          )
        }
      </ul>



    </div>
  )
}

export default MovieList