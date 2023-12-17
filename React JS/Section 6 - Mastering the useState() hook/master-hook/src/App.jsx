import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState({ name: "lucky", isBanned: false });

  return (
    <div className="p-4">
      <h1>Name : {val.name}</h1>
      <h2>Banned : {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${
          val.isBanned ? "bg-blue-600" : "bg-red-700"
        } text-white text-md rounded-full`}
      >
        Change Button
      </button>
    </div>
  );
}

export default App;
