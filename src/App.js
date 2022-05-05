import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import SearchMovie from './components/SearchMovie';

function App() {
  return (
    <div className='flex w-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<SearchMovie/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
