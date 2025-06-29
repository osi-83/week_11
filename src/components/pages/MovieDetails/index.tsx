import { useParams, useNavigate } from "react-router-dom";
import HorizonteEstelar from '../../../assets/Horizonte_estelar.jpg';
import CartasDeInverno from '../../../assets/Cartas_inverno.jpg';
import Aventuras from '../../../assets/Aventuras.jpg';
import CidadeSubmersa from '../../../assets/Cidade_Submersa.jpg';
import CodigoPerdido from '../../../assets/Codigo_Perdido.jpg';
import UltimaCancao from '../../../assets/A_ultima_cancao.jpg';

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
  '4': {
    title: 'Cidade Submersa',
    posterUrl: CidadeSubmersa,
    genre: 'Suspense',
    ageRating: '16+',
    synopsis: 'Após um terremoto revelar ruínas desconhecidas no fundo do oceano, uma equipe de cientistas é enviada para investigar. Entre túneis submersos e sinais misteriosos, descobrem uma civilização perdida. Mas quanto mais se aprofundam, mais a realidade começa a se distorcer. Estranhos ruídos ecoam pelas estruturas e membros da equipe começam a desaparecer. Presos em um labirinto de escuridão e água, precisam encontrar a saída antes que a cidade os engula. Suspense psicológico e tensão crescente se unem nesta jornada claustrofóbica. Seria a cidade apenas ruínas... ou algo ainda vive ali? Verdades esquecidas voltam à tona com consequências mortais. Mistério e medo emergem das profundezas. Eles pensavam explorar... mas foram caçados.',
  },
  '5': {
    title: 'Codigo Perdido',
    posterUrl: CodigoPerdido,
    genre: 'Suspense',
    ageRating: '16+',
    synopsis: 'A jovem criptógrafa Sofia é chamada para decifrar o conteúdo. O que parecia um diário revela-se um mapa de segredos milenares. Símbolos estranhos, enigmas e pistas os levam a sociedades secretas. Cada página decifrada aproxima Sofia da verdade — e do perigo. Outros também querem o códice... e farão de tudo para obtê-lo. Uma jornada por igrejas, arquivos secretos e túneis medievais começa. Mas o maior enigma está no passado de Sofia. O que ela procura pode mudar a história — ou destruí-la. Mistério, ação e revelações intensas definem essa busca.',
  },
  '6': {
    title: 'A Ultima Cancao',
    posterUrl: UltimaCancao,
    genre: 'Suspense',
    ageRating: '16+',
    synopsis: 'Clara é uma jovem compositora em luto pela perda do pai, um famoso maestro. Sem inspiração, ela encontra uma partitura inacabada guardada por ele. Ao tocar as notas, começa a reviver lembranças perdidas e vozes do passado. Cada verso traz um fragmento da vida que teve — e a que poderia ter tido. A música a guia por uma jornada de cura e descobertas familiares. Ela decide terminar a canção como tributo, mas há algo mais por trás dela. A melodia oculta segredos que podem mudar sua visão sobre o pai. Em meio a lágrimas e acordes, Clara redescobre o amor e o perdão. A canção final pode ser seu maior legado... ou sua maior revelação. Uma história tocante sobre memória, arte e superação.',
  },

};

export default function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieData[id as keyof typeof movieData];

  if (!movie) return <p>Filme não encontrado.</p>;

  return (
    <div className="grid gap-2 text-center">
      <img src={movie.posterUrl} alt={movie.title} style={{ maxWidth: '400px' , maxHeight: '400px', margin: '10px auto' }} />
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