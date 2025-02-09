import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
const NotFoundPage = () => {
  return (
    <div className="homeConteiner notFound">
      <h1>404</h1>
      <h3>
        <MdErrorOutline className="errorIcon"/>
         Oops! We can't find the page you're looking for...
      </h3>
      <Link className="btn" to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
