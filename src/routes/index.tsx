import { Routes, Route } from 'react-router-dom';
import MoviesPage from '../components/pages/Movies/index';
import MovieDetailsPage from '../components/pages/MovieDetails';
import ContatoPage from '../components/pages/Contact/Contato';
import MainLayout from '../components/templates/MainLayout';

export function AppRoutes() {
  return (
    <MainLayout>
        <Routes>
          <Route path="/" element={<div>Início</div>} />
          <Route path="/filmes" element={<MoviesPage />} />
          <Route path="/filmes/:id" element={<MovieDetailsPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </MainLayout>
  );
}