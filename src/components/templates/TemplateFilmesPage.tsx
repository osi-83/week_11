import FilmesPage from "../pages/Movies/FilmesPage";

const TemplateFilmesPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Filmes em Cartaz</h1>
      <FilmesPage />
    </div>
  );
};

export default TemplateFilmesPage;