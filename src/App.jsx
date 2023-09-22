import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";

function App() {
  return (
    <div className="font-montserrat relative">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default App;
