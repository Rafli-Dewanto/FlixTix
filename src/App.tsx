import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MovieDetail from './pages/MovieDetail';
import Profile from './pages/Profile';
import BookSeats from './pages/BookSeats';
import TopUp from './pages/TopUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/movies/book-seats/:id" element={<BookSeats />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/top-up" element={<TopUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
