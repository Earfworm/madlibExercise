import { useContext } from "react";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import "./ListStoriesRoute.css";

const ListStoriesRoute = () => {
  const { stories } = useContext(StoriesContext);
  return (
    <div className="ListStoriesRoute">
      <h2>Pick a story</h2>
      <ul className="stories">
        {stories.map((story) => (
          <li key={story.id}>
            <Link to={`/stories/${story.id}`}>{story.author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListStoriesRoute;
