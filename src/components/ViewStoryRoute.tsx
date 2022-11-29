import { useContext } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";

import "./ViewStoryRoute.css";

const ViewStoryRoute = () => {
  const { stories } = useContext(StoriesContext);
  const id: string | undefined = useParams().id;
  const findStory = stories.find((story) => {
    return story.id === +id!;
  });
  const navigate = useNavigate();
  if (findStory === undefined) {
    //navigate("/stories");
    return <Navigate to={"/stories"} />;
  }
  return (
    <div className="ViewStoryRoute">
      <h2>Mad Lib By: {findStory?.author}</h2>
      <p>
        I was in {findStory?.word1} with {findStory?.word2} and I had to{" "}
        {findStory?.word3} as a {findStory?.word4} {findStory?.word5} word to{" "}
        {findStory?.word6}
      </p>
    </div>
  );
};

export default ViewStoryRoute;
