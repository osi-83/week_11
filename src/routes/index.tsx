import { Routes, Route } from "react-router-dom";
import TemplateInicioPage from "../components/templates/TemplateInicioPage";
import TemplateFilmesPage from "../components/templates/TemplateFilmesPage";
import TemplateDetFilmesPage from "../components/templates/TemplateDetFilmesPage";
import TemplateContatoPage from "../components/templates/TemplateContatoPage";
import MainLayout from "../components/templates/MainLayout";

export function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<TemplateInicioPage />} />
        <Route path="/filmes" element={<TemplateFilmesPage />} />
        <Route path="/filmes/:id" element={<TemplateDetFilmesPage />} />
        <Route path="/contato" element={<TemplateContatoPage />} />
      </Routes>
    </MainLayout>
  );
}