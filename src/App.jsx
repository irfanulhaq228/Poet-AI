import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import Signin from "./Pages/Auth/Signin";
import Chatbot from "./Pages/Chatbot/Chatbot";
import Home from "./Pages/Home/Home";
import UrduPoetry from "./Pages/UrduPoetry/UrduPoetry";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/chat-bot" element={<Chatbot />} />
        <Route path="/urdu-poetry" element={<UrduPoetry />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
