import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Profiles:</h1>
      <hr />
      <ul>
        <li>
          <Link to="/profile/default">Default</Link>
        </li>
        <li>
          <Link to="/profile/spinach">Spinach</Link>
        </li>
        <li>
          <Link to="/profile/popeye">Popeye</Link>
        </li>
        <li>
          <Link to="/profile/vinson">Vinson</Link>
        </li>
        <li>
          <Link to="/">Go back</Link>
        </li>
      </ul>
    </div>
  );
};

export { ErrorPage };
