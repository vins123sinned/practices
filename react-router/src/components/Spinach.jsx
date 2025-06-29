import { Link } from "react-router-dom";

const Spinach = () => {
  return (
    <>
      <p>Wait... why is spinach here?</p>
      <p>Oh... Wrong popeyes.</p>
      <Link to="/profile">Go back</Link>
    </>
  );
};

export { Spinach };