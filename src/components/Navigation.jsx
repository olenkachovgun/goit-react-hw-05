import { NavLink } from "react-router-dom";

const Navigation = ({ movieId }) => {
  return (
    <div className="movieDetails">
      <nav>
        <h3>Addinional information</h3>
        <ul className="navDetails">
          <li>
            <NavLink className="btn" to={`/movies/${movieId}/cast`}>
              {" "}
              Cast{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="btn" to={`/movies/${movieId}/reviews`}>
              {" "}
              Reviews{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
