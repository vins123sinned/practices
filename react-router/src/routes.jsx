import App from "./App";
import { Profile } from "./components/Profile.jsx";
import { ErrorPage } from "./components/ErrorPage.jsx";
import { Roblox } from "./components/Roblox.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
  {
    path: "roblox",
    element: <Roblox />,
  },
];

export { routes };
