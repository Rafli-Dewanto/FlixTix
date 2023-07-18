import { useNavigate } from 'react-router-dom';
import SecondaryButton from './SecondaryButton';
import React from 'react'

const Card = ({ description, posterUrl, title, id }: {
  description: string;
  posterUrl: string;
  title: string;
  id: number;
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/movies/${id}`)}
      className="overflow-hidden bg-center bg-cover rounded-lg transition-all duration-300 font-inter group hover:scale-105 hover:brightness-125"
      style={{ backgroundImage: `url(${posterUrl})`, minHeight: '31.25rem' }}
    >
      <div className="flex flex-col justify-end h-full p-4 bg-black bg-opacity-30">
        <h3 className="mb-2 text-xl font-semibold text-white truncate">
          {title}
        </h3>
        <p className="mb-4 text-white line-clamp-2 drop-shadow-2xl">{description}</p>
        <SecondaryButton>
          Book now!
        </SecondaryButton>
      </div>
    </div>
  );
};

export default Card;
