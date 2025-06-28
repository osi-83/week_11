import { MovieCard } from '../../molecules/MovieCards';
import { useNavigate } from 'react-router-dom';
import HorizonteEstelar from '../../../assets/Horizonte_estelar.jpg';
import CartasDeInverno from '../../../assets/Cartas_inverno.jpg';
import Aventuras from '../../../assets/Aventuras.jpg';


const movies = [
  {
    id: '1',
    title: 'Horizonte Estelar',
    posterUrl: HorizonteEstelar,
    genre: 'Ficção científica',
    ageRating: '16+',
    synopsis: '...',    
  },
  {
    id: '2',
    title: 'Cartas de Inverno',
    posterUrl: CartasDeInverno,
    genre: 'Romance',
    ageRating: '16+',
    synopsis: '...',
  },
  {
    id: '3',
    title: 'Aventuras no Reino Doce',
    posterUrl: Aventuras,
    genre: 'Aventura',
    ageRating: '12+',
    synopsis: '....',
  },
];

export default function MoviesPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterUrl={movie.posterUrl}
            genre={movie.genre}
            ageRating={movie.ageRating}
            onSeeMore={() => navigate(`/filmes/${movie.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
