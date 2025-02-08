import { NavLink } from "react-router-dom";
const Navigation = ({ movieId }) => {
  return (
    <div>
      Navigation
      <nav>
        <ul>
          Addinional information
          <li>
            <NavLink to={`/movies/${movieId}/cast`}> Cast </NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}> Reviews </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
