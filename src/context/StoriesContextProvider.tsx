import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setNewStories] = useState<Story[]>([]);
  const addStory = (story: Story) => {
    setNewStories((prev) => [...prev, story]);
    story.id = +1;
  };

  return (
    <StoriesContext.Provider value={{ addStory, stories }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
