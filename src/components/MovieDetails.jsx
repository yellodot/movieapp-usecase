import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import MovieList from "./MovieList";

function MovieDetails() {

  const movieId = useParams().id;
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios.get(URL)
    .then(res => res.data)
    .then(data => {
      setMovieData(data);
    })
    .catch((err) => console.log('Error', err));
  }, [movieId]);

  const POSTER_URL = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`

  console.log('movie data', movieData)


  return (
    <>
    <MovieList />
    <div className='flex w-full justify-center px-16 py-16'>
        <div>
            <img className="h-4/6 object-contain" src={POSTER_URL} alt="poster"/>
        </div>
        <div className='flex flex-col max-w-xl sm:pr-6'>
          <div className='flex justify-between items-center'>
            <div>
              <div className="text-4xl font-extrabold">
                {movieData.title}
              </div>
              <div className="flex pt-4 pb-6 text-xs text-zinc-400 font-bold">
                <div className="pr-4">
                  2018
                </div>
                <div>
                  Original language : EN
                </div>
              </div>
            </div>
            <div>
              <ul className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={ movieData.vote_average > 2 ? "orange" : "none"} viewBox="0 0 24 24" stroke="orange" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={ movieData.vote_average > 4 ? "orange" : "none"} viewBox="0 0 24 24" stroke="orange" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={movieData.vote_average > 6 ? "orange" : "none"} viewBox="0 0 24 24" stroke="orange" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={movieData.vote_average > 8 ? "orange" : "none"} viewBox="0 0 24 24" stroke="orange" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={movieData.vote_average > 9 ? "orange" : "none"} viewBox="0 0 24 24" stroke="orange" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
              </ul>
            </div>
          </div>
          <div className='font-bold pt-14'>
            {movieData.overview}
          </div>
        </div>
    </div>
    </>
  )
}

export default MovieDetails