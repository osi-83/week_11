import { useParams, useNavigate } from "react-router-dom";
import HorizonteEstelar from '../../../assets/Horizonte_estelar.jpg';
import CartasDeInverno from '../../../assets/Cartas_inverno.jpg';
import Aventuras from '../../../assets/Aventuras.jpg';

const movieData = {
  '1': {
    title: 'Horizonte Estelar',
    posterUrl: HorizonteEstelar,
    genre: 'Ficção científica',
    ageRating: '16+',
    synopsis: 'Em um futuro onde a humanidade coloniza exoplanetas, a cientista Lara descobre uma anomalia no espaço-tempo que ameaça engolir a galáxia.Para impedir o colapso universal, ela lidera uma missão à beira do buraco negro mais instável do universo.Ao atravessar o vórtice, a tripulação experimenta realidades paralelas, enfrentando versões distorcidas de si mesmos.O tempo corre contra eles enquanto descobrem que a única saída está nos próprios sacrifícios.Uma jornada intensa entre ciência, emoção e o desconhecido.',
  },
  '2': {
    title: 'Cartas de Inverno',
    posterUrl: CartasDeInverno,
    genre: 'Romance',
    ageRating: '16+',
    synopsis: 'Durante as nevascas do inverno europeu, Elena encontra uma caixa com cartas antigas escondidas no sótão de sua avó.Cada carta revela uma história de amor interrompida pela guerra.Curiosa, ela investiga e conhece Marco, neto do antigo remetente.Juntos, percorrem vilarejos e arquivos, reconstruindo um romance que ecoa no presente.Em meio às descobertas, nasce uma conexão inesperada entre os dois.',
  },
  '3': {
    title: 'Aventuras no Reino Doce',
    posterUrl: Aventuras,
    genre: 'Aventura',
    ageRating: '12+',
    synopsis: 'Luna, uma garotinha curiosa, é sugada para dentro de um livro mágico e acorda num reino feito de doces.Lá, conhece personagens engraçados como o Rei Marshmallow e a Abelha de Algodão-doce.Juntos, eles precisam salvar o Reino Doce das travessuras do Sorvete Derretido.Com coragem e muita imaginação, Luna descobre o poder da amizade.Uma aventura colorida, leve e cheia de risadas.',
  },
};

export default function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieData[id as keyof typeof movieData];

  if (!movie) return <p>Filme não encontrado.</p>;

  return (
    <div className="grid gap-2 text-center">
      <img src={movie.posterUrl} alt={movie.title} style={{ maxWidth: '400px' , maxHeight: '300px', margin: '10px auto', display: 'block' }} />
      <h1 className=" font-bold text-2x1, mb-1 ">{movie.title}</h1>
      <p className="text-gray-600, mb-1 ">Gênero: {movie.genre}</p>
      <p className="text-gray-600">Classificação: {movie.ageRating}</p>
      <p className="text-gray-600">{movie.synopsis}</p>
      <button
        onClick={() => navigate('/filmes')} className="mt-2 bg-black text-white px-4 py-2 rounded-md hover:bg-black-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-115 max-w-max mx-auto"
      >
        Voltar
      </button>
    </div>
  );
}