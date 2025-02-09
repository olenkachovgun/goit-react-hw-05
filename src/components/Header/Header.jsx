import { Link } from "react-router-dom";
// import s from "./Header.module.css";
import logo from "./tmdb.svg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" width={150} />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
