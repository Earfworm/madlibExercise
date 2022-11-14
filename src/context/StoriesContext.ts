import { createContext } from "react";
import Story from "../models/Story";

interface StoryContext {
  stories: Story[];
  addStory: (story: Story) => void;
}

const defaultValues: StoryContext = {
  stories: [
    {
      id: 0,
      author: "string",
      word1: "string",
      word2: "string",
      word3: "string",
      word4: "string",
      word5: "string",
      word6: "string",
    },
  ],
  addStory: (story: Story) => {},
};

const StoriesContext = createContext(defaultValues);

export default StoriesContext;
