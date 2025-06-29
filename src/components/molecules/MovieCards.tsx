import React from "react";

interface MovieCardsProps {
    title: string;
    posterUrl:string;
    genre: string;
    ageRating: string;
    onSeeMore: () => void;
}

export const MovieCard: React.FC<MovieCardsProps> = ({ title, posterUrl, genre, ageRating, onSeeMore }) => {
  return (
    <div className="display flex flex-col items-center p-6">
      <img src={posterUrl} alt={title} loading="lazy" className="h-250 w-180"/>
      <h3 className="text-lg font-bold mt-4 ">{title}</h3>
      <p className="text-sm mt-2 text-gray-600 mb-2">Gênero: {genre}</p>
      <p className="text-sm mt-2 text-gray-600">Classificação: {ageRating}</p>
      <button
        onClick={onSeeMore}
        className="mt-2 mb-6 bg-black text-white px-4 py-2 rounded-md hover:bg-black-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-115 "
      >
        Ver mais
      </button>
    </div>
  );
};

export default MovieCard;