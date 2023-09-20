import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-montserrat relative">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
