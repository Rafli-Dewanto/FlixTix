import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import formatRupiah from '@/utils/format-rupiah';
import { useAtom } from 'jotai';
import { userAtom } from '@/atom';
import ErrorAlert from '@/components/ErrorAlert';
import movies from '@/movies.json';
import PrimaryButton from '@/components/PrimaryButton';
import IMovie from '@/utils/types/movie';
import MainLayout from '@/layouts/MainLayout';

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();
  const [user, _setUser] = useAtom(userAtom);
  const [userBalance,] = useState<number>(user.balance);
  const [ticketCount,] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  const getMovie = useCallback(() => {
    const data = movies.find((m) => m.id === parseInt(id as string, 10));
    setMovie(data);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  useEffect(() => {
    setIsError(false);
    const newPrice = movie ? movie.ticket_price * ticketCount : 0;
    setPrice(newPrice);
  }, [movie, ticketCount]);

  const checkout = () => {
    if (userBalance < price) {
      setIsError(true);
      return;
    }
    navigate(`/movies/book-seats/${id}`);
  };

  if (!movie) {
    return <Loading />;
  }

  return (
    <MainLayout>
      {/* checkout */}
      <ErrorAlert
        isError={isError}
        title={'Something went wrong'}
        description={'Your balance is insufficient'}
      />
      <div className="flex justify-center">
        <div className="w-1/2 p-4">
          <div className="mb-4">
            <img
              src={movie.poster_url}
              alt={movie.title}
              className="object-contain mx-auto rounded-lg w-96 aspect-square"
            />
          </div>
          <h1 className="mb-2 text-2xl font-bold">{movie.title}</h1>
          <p className="mb-4 text-gray-500">{movie.description}</p>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-sm text-gray-500">Rating:</span>
            <span className="text-sm text-gray-500">{movie.age_rating}+</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-sm text-gray-500">Price:</span>
            <span className="text-sm text-gray-500">
              {formatRupiah(movie.ticket_price)}
            </span>
          </div>
          <PrimaryButton
            onClick={checkout}
          >
            Checkout
          </PrimaryButton>
        </div>
      </div>
    </MainLayout>
  );
};

function Loading() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center">
        <Spinner size={`xl`} aria-label="Center-aligned spinner example" />
      </div>
    </div>
  );
}

export default MovieDetail;
