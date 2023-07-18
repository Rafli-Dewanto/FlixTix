import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '@/atom';
import movies from '@/movies.json';
import { useNavigate, useParams } from 'react-router-dom';
import IMovie from '@/utils/types/movie';
import BookForm from '@/components/BookForm';
import Seats from '@/components/Seats';
import MainLayout from '@/layouts/MainLayout';

const BookSeats = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [user, setUser] = useAtom(userAtom);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [movie, setMovie] = useState<IMovie>();

  const getMovie = useCallback(() => {
    const data = movies.find((m) => m.id === parseInt(id as string));
    setMovie(data);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  const handleSeatClick = (index: number) => {
    const selectedSeat = index + 1;

    if (selectedSeats.includes(selectedSeat)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== selectedSeat));
    } else if (selectedSeats.length < 6) {
      setSelectedSeats([...selectedSeats, selectedSeat]);
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setUser({
      ...user,
      fullname: name || user.fullname,
      age: age || user.age,
    });

    if (movie && age < movie.age_rating) {
      alert(`You're not old enough to watch this movie.`);
      navigate('/');
    } else {
      navigate(`/profile`)
    }
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center md:mx-28 font-inter">
        <BookForm {...{ setAge, setName, handleSubmit }} />
        <Seats {...{ selectedSeats, handleSeatClick }} />
      </div>
    </MainLayout>
  );
};

export default BookSeats;
