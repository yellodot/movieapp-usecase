import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className='flex w-screen'>
      <Routes>
        <Route path="/" element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
