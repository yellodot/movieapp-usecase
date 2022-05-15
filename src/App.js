import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <Header />
        <div className='h-screen'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:id" element={<MovieDetails/>} />
          </Routes>
          <Footer />
        </div>
         
      </div>
    </>
  );
}

export default App;
