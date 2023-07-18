import movies from '@/movies.json';
import IMovie from '@/utils/types/movie';
import { useMemo, useState } from 'react';

const useMovies = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  IMovie[],
] => {
  const [query, setQuery] = useState<string>('');

  const filteredMovies = useMemo<IMovie[]>(() => {
    return movies.filter((movie: IMovie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return [query, setQuery, filteredMovies];
};

export default useMovies;
