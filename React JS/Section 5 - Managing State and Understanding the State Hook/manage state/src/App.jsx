import { useState } from "react";
import "./App.css";

function App() {
  // const [score, setScore] = useState(0);
  // const [banned, setBanned] = useState(false);

  // const [val, setVal] = useState(0);
  const [data, setData] = useState({ name: "lucky", isBanned: false });

  // const handleScore = () => {
  //   setScore(score + 1);
  // };

  // const handleBanned = () => {
  //   setBanned(!banned);
  // };

  return (
    <div className="px-10">
      {/* <h3>{banned.toString()}</h3> */}
      {/* <h3>{val}</h3> */}
      <h3>Name : {data.name}</h3>
      <h4>Is Banned : {data.isBanned.toString()}</h4>
      {/* <button
        className="px-2 py-2 text-xs mt-4 bg-blue-500 rounded-md text-white"
        onClick={handleBanned}
      >
        Change Banned
      </button> */}

      {/* <button
        className="px-2 py-2 text-xs mt-4 bg-blue-500 rounded-md text-white"
        onClick={() => setVal((prev) => prev + 1)}
      >
        Change Value
      </button> */}

      <button
        className="px-2 py-2 text-xs mt-4 bg-blue-500 rounded-md text-white"
        // onClick={() => setData({ name: "Divyanshu", isBanned: true })}
        onClick={() => setData({ ...data, isBanned: !data.isBanned })}
      >
        Change Value
      </button>
    </div>
  );
}

export default App;
