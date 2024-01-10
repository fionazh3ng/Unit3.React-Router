import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to={"/"}></Link>
      <Link to={"/blue"}>Blue</Link>
      <Link to={"/red"}>Red</Link>
      <Link to={"/green"}>Green</Link>
      <Link to={"/yellow"}>Yellow</Link>
      <Link to={"/black"}>Black</Link>
    </div>
  );
};

export default NavBar;
