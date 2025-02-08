import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>404</h2>
      <h3>NotFoundPage</h3>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
