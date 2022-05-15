import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import Home from "./Home";

function MovieDetails() {

  const movieId = useParams().id;
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch the data for the selected movie
  useEffect(() => {
    axios.get(URL)
    .then(res => res.data)
    .then(data => {
      setMovieData(data);
      setIsLoading(false);
    })
    .catch((err) => console.log('Error', err));
  }, [movieId]);

  // URL for movie poster
  const POSTER_URL = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`
  const imdbHref = `https://www.imdb.com/title/${movieData.imdb_id}`;

  return (
    <>
    <div className="flex flex-col md:flex-row">
    <Home />
    {
    isLoading ? 
    <div className="flex justify-center items-center">
        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        </svg>
    </div>
    :
    <div className="h-full bg-gray-100 md:h-auto py-6 flex flex-col md:items-center md:w-full md:py-12">
      <div className="md:w-11/12 justify-center items-center md:justify-start md:items-start flex-col bg-white shadow-lg border-gray-100 border md:rounded-3xl p-8 flex md:flex-row space-x-8">
        <div className="h-full object-contain w-full md:w-1/2">
            <img className="rounded-3xl shadow-lg" src={POSTER_URL} alt=""/>
        </div>
        <div className="flex flex-col w-full pt-6 md:pt-0 md:w-1/2 space-y-4">
          <div className="flex md:justify-between md:items-start">
            <h2 className="text-4xl font-bold">{movieData.title}</h2>
          </div>
          <div>
          <ul className="flex justify-start">
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
                <div className="py-2 text-lg font-base text-gray-600">{movieData.release_date.slice(0,4)}</div>
            {
              movieData.genres.map((genre) => 
              <button className="bg-slate-300 mr-2 px-2 py-1 text-slate-800 mb-2">
                {genre.name}
              </button>
            )
            }
          </div>
            <h3 className="pt-4 font-semibold">Overview</h3>
            <p className=" text-gray-600 max-h-fit overflow-visible">{movieData.overview}</p>
            <button className="font-semibold flex justify-start">
                <span className="bg-amber-400 w-12 h-6 text-neutral-900 font-black">
                  <a href={imdbHref}>IMDB</a>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
            </button>
        </div>
      </div>
    </div> 
  }
  </div>
  </>
 )

}
export default MovieDetails