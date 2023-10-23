import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Speisekarte</NavLink>
        <NavLink to="/Oeffnungszeiten">Öffnungszeiten</NavLink>
        <NavLink to="/Kontakt">Kontakt</NavLink>
        <NavLink to="/Galerie">Galerie</NavLink>
      </nav>
    </header>
  );
};

export default Header;
