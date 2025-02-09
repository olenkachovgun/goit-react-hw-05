import { NavLink } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";

const Navigation = ({ movieId }) => {
  return (
    <div className="movieDetails">
      <nav>
        <h3>Addinional information</h3>
        <ul className="navDetails">
          <li>
            <NavLink className="btn" to={`/movies/${movieId}/cast`}>
              {" "}
              <IoIosPeople className="icon" />
              Cast{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="btn" to={`/movies/${movieId}/reviews`}>
              {" "}
              <MdOutlineRateReview className="icon" />
              Reviews{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
