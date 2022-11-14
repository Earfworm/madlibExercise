import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import CreateStoryRoute from "./components/CreateStoryRoute";
import Header from "./components/Header";
import HomeRoute from "./components/HomeRoute";
import ListStoriesRoute from "./components/ListStoriesRoute";
import ViewStoryRoute from "./components/ViewStoryRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/stories" element={<ListStoriesRoute />} />
          <Route path="/stories/:id" element={<ViewStoryRoute />} />
          <Route path="/create-story" element={<CreateStoryRoute />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
