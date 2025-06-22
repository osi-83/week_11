import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  return <h1>Detalhes do Filme:
    {id}</h1>;
}

export default MovieDetails;