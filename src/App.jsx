import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import Signin from "./Pages/Auth/Signin";
import Chatbot from "./Pages/Chatbot/Chatbot";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/chat-bot" element={<Chatbot />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
