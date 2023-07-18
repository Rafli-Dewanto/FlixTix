import useMovies from '@/hooks/useMovies';
import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar';

const MovieLists = () => {
  const [query, setQuery, filteredMovies] = useMovies();

  return (
    <div className="container px-4 py-8 mx-auto mt-10 font-inter">
      <SearchBar {...{ query, setQuery }} />
      {/* Movie list */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMovies.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            posterUrl={data.poster_url}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieLists;
