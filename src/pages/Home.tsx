import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import MovieLists from '../components/MovieLists';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  return (
    <>
      <MainLayout page={''}>
        <CarouselComponent />
        <MovieLists />
      </MainLayout>
    </>
  );
};

export default Home;
