import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Madlibs from "../models/Madlibs";
import Story from "../models/Story";
import { newMadlib } from "../Services/MadlibServices";
import "./ListStoriesRoute.css";

const ListStoriesRoute = () => {
  const { stories } = useContext(StoriesContext);
  const [savedStories, setSavedStories] = useState<Story>();
  useEffect(() => {
    newMadlib(stories).then((res) => setSavedStories(res));
  });
  console.log(savedStories);
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
