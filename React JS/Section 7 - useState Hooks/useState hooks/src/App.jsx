import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import SomeThing from "./components/SomeThing";

function App() {
  // const [val, setVal] = useState({ name: "lucky", isBanned: false });
  // const [val, setVal] = useState({ name: "lucky", age: 23 });

  // const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  // const [val, setVal] = useState([
  //   { name: "lucky", age: 23 },
  //   { name: "Shivam", age: 34 },
  //   { name: "golu", age: 25 },
  // ]);

  return (
    <div>
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

      {/* <h1>Name : {val.name}</h1>
      <h2>Age : {val.age}</h2>
      <h3>Role : {val.gender}</h3>

      <button
        className="px-3 py-1 mt-3 bg-red-500 text-md rounded-full"
        onClick={() => setVal({ ...val, gender: "Male" })}
      >
        Click
      </button> */}
      {/* 
      {val.map((item, index) => (
        <>
          <h1 key={index}>Name : {item.name}</h1>
          <p>Age : {item.age}</p>
        </>
      ))} */}

      {/* <button
        onClick={() =>
          setVal(() =>
            val.map((item, index) =>
              item.name === "Shivam" ? { name: "Shivam", age: 55 } : item
            )
          )
        }
        // onClick={() => setVal([...val, 10])}
        // onClick={() =>
        //   setVal(() => val.filter((item, index) => item % 2 !== 0))
        // }
        // onClick={() => setVal(() => val.filter((item, index) => index != 2))}
        // onClick={() =>
        //   setVal(() => {
        //     return val.filter((item, index) => index != val.length - 1);
        //   })
        // }
        className="px-3 py-1 text-md bg-blue-500 rounded-full text-white"
      >
        Change
      </button> */}

      {/* <Card /> */}
      <SomeThing />
    </div>
  );
}

export default App;
