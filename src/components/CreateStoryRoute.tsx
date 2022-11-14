import { FormEvent, useContext, useState } from "react";
import StoriesContext from "../context/StoriesContext";
import "./CreateStoryRoute.css";

const CreateStoryRoute = () => {
  const { addStory, stories } = useContext(StoriesContext);
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputPlace, setInputPlace] = useState("");
  const [inputPerson, setInputPerson] = useState("");
  const [inputSillyWord, setInputSillyWord] = useState("");
  const [inputOccupation, setInputOccupation] = useState("");
  const [inputBrandTagLine, setInputBrandTagLine] = useState("");
  const [inputFavoriteSong, setInputFavoriteSong] = useState("");
  console.log(stories);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const newStory = {
      author: inputAuthor,
      word1: inputPlace,
      word2: inputPerson,
      word3: inputSillyWord,
      word4: inputOccupation,
      word5: inputBrandTagLine,
      word6: inputFavoriteSong,
    };
    addStory(newStory);
    setInputAuthor("");
    setInputPlace("");
    setInputPerson("");
    setInputSillyWord("");
    setInputOccupation("");
    setInputBrandTagLine("");
    setInputFavoriteSong("");
  };
  return (
    <form className="CreateStoryRoute" onSubmit={submitHandler}>
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        id="author"
        value={inputAuthor}
        onChange={(e) => {
          setInputAuthor(e.target.value);
        }}
      />
      <label htmlFor="place">Place:</label>
      <input
        type="text"
        name="place"
        id="place"
        value={inputPlace}
        onChange={(e) => {
          setInputPlace(e.target.value);
        }}
      />
      <label htmlFor="person">Person:</label>
      <input
        type="text"
        name="person"
        id="place"
        value={inputPerson}
        onChange={(e) => {
          setInputPerson(e.target.value);
        }}
      />
      <label htmlFor="silly-word">Silly Word:</label>
      <input
        type="text"
        name="silly-word"
        id="silly-word"
        value={inputSillyWord}
        onChange={(e) => {
          setInputSillyWord(e.target.value);
        }}
      />
      <label htmlFor="occupation">Occupation:</label>
      <input
        type="text"
        name="occupation"
        id="occupation"
        value={inputOccupation}
        onChange={(e) => {
          setInputOccupation(e.target.value);
        }}
      />
      <label htmlFor="brand">Brand Tagline:</label>
      <input
        type="text"
        name="brand"
        id="brand"
        value={inputBrandTagLine}
        onChange={(e) => {
          setInputBrandTagLine(e.target.value);
        }}
      />

      <label htmlFor="favorite-song">Favortie Song:</label>
      <input
        type="text"
        name="favorite-song"
        id="favorite-song"
        value={inputFavoriteSong}
        onChange={(e) => {
          setInputFavoriteSong(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default CreateStoryRoute;
