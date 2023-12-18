import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <nav className="mt-10 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
        <Link to="/services">services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
