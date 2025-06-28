import { MovieCard } from '../../molecules/MovieCards';
import { useNavigate } from 'react-router-dom';
import HorizonteEstelar from '../../../assets/Horizonte_estelar.jpg';
import CartasDeInverno from '../../../assets/Cartas_inverno.jpg';
import Aventuras from '../../../assets/Aventuras.jpg';
import CidadeSubmersa from '../../../assets/Cidade_Submersa.jpg';
import CodigoPerdido from '../../../assets/Codigo_Perdido.jpg';
import UltimaCancao from '../../../assets/A_ultima_cancao.jpg';


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
  {
    id: '4',
    title: 'Cidade Submersa',
    posterUrl: CidadeSubmersa,
    genre: 'Suspense',
    ageRating: '16+',
    synopsis: '....',
  },
  {
    id: '5',
    title: 'O código perdido',
    posterUrl: CodigoPerdido,
    genre: 'Mistério',
    ageRating: '16+',
    synopsis: '....',
  },
  {
    id: '6',
    title: 'A última canção',
    posterUrl: UltimaCancao,
    genre: 'Drama',
    ageRating: '10+',
    synopsis: '....',
  },
];

export default function MoviesPage() {
  const navigate = useNavigate();

  return (
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
  );
}
