import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import MovieDetails from "./components/pages/MovieDetails";
import Contact from "./components/pages/Contact/Contato";
import Navbar from "./components/organisms/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/filmes/:id" element={<MovieDetails />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;