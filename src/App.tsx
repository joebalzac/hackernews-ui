import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { NewsFeed } from "./components/NewsFeed";
import { CommentsPage } from "./components/CommentsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsFeed />} />
        <Route path="/comments/:id" element={<CommentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
