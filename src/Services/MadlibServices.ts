import axios from "axios";
import Madlibs from "../models/Madlibs";
import Story from "../models/Story";

const baseUrl: string = process.env.REACT_APP_API_URL || "";

export const newMadlib = (SavedStories: Story[]): Promise<Story> => {
  return axios
    .post(`${baseUrl}/madlibs`, SavedStories)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};
