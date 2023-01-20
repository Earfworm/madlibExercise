import axios from "axios";
import Madlibs from "../models/Madlibs";

const baseUrl: string = process.env.REACT_APP_API_URL || "";

export const newMadlib = (SavedMadlibs: Madlibs): Promise<Madlibs> => {
  return axios
    .post(`${baseUrl}/madlibs`, SavedMadlibs)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};
