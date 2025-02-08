import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "./tmdb.svg";
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" width={150} />

      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
