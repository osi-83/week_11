import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItemClass = (path: string) =>
    `px-4 py-2 ${location.pathname === path ? "font-bold underline" : ""}`;

  return (
    <nav>
      <div className="text-xl font-bold">🎟️ TicketOnline</div>
      <div className="flex gap-4 items-center">
        <Link to="/" className={navItemClass("/")}>Início</Link>
        <Link to="/filmes" className={navItemClass("/filmes")}>Filmes</Link>
        <Link to="/contato" className={navItemClass("/contato")}>Contato</Link>
        <button onClick={toggleTheme} className="p-2">
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;