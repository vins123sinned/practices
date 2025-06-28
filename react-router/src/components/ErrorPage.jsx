import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>You lost?</h1>
      <p>This ain't a place for you mon ami...</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export { ErrorPage };
