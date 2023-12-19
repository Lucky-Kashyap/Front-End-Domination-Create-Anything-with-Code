import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import User from "./component/User";
import About from "./component/About";
import UserDetail from "./component/UserDetail";

function App() {
  return (
    <div className="p-4 w-1/2 m-auto">
      <nav className="mt-10 my-10 p-4 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetail />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
