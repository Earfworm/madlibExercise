import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to={"/"}>
        <h1>GC MadLibs</h1>
      </Link>
      <nav>
        <Link to={"/stories"}>See saved Stories</Link>
        <Link to={"/create-story"}>Create a new story</Link>
      </nav>
    </div>
  );
};

export default Header;
