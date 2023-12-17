import { useState } from "react";
import "./App.css";

function App() {
  // const [val, setVal] = useState({ name: "lucky", isBanned: false });
  const [val, setVal] = useState({ name: "lucky", age: 23 });

  return (
    <div className="p-4">
      {/* <h1>Name : {val.name}</h1>
      <h2>Banned : {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${
          val.isBanned ? "bg-blue-600" : "bg-red-700"
        } text-white text-md rounded-full`}
      >
        Change Button
      </button> */}

      <h1>Name : {val.name}</h1>
      <h2>Age : {val.age}</h2>
      <h3>Role : {val.gender}</h3>

      <button
        className="px-3 py-1 mt-3 bg-red-500 text-md rounded-full"
        onClick={() => setVal({ ...val, gender: "Male" })}
      >
        Click
      </button>
    </div>
  );
}

export default App;
