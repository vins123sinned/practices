import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, error!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}