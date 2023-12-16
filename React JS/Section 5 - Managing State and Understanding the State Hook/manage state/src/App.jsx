import { useState } from "react";
import "./App.css";

function App() {
  // const [score, setScore] = useState(0);
  const [banned, setBanned] = useState(false);

  // const handleScore = () => {
  //   setScore(score + 1);
  // };

  const handleBanned = () => {
    setBanned(!banned);
  };

  return (
    <div className="px-10">
      <h3>{banned.toString()}</h3>
      <button
        className="px-2 py-2 text-xs mt-4 bg-blue-500 rounded-md text-white"
        onClick={handleBanned}
      >
        Change Banned
      </button>
    </div>
  );
}

export default App;
