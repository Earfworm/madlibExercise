import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to={"/"}>
        {/* <h1>GC MadLibs</h1> */}
        <div>
          <img
            id="logo"
            src="https://m.media-amazon.com/images/S/abs-image-upload-na/1/AmazonStores/ATVPDKIKX0DER/4498f390bec918e23297568ddf99f4b6.w400.h400.png"
            alt="madlibs logo"
          />
        </div>
      </Link>
      <nav>
        <Link className="saved-stories" to={"/stories"}>
          See saved Stories
        </Link>
        <Link className="create-story" to={"/create-story"}>
          Create a new story
        </Link>
      </nav>
    </div>
  );
};

export default Header;
