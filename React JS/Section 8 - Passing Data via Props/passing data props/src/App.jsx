import { useState } from "react";
import "./App.css";
import PassData from "./components/PassData";
// import Card from "./components/Card";
// import SomeThing from "./components/SomeThing";
// import Props from "./components/Props";

function App() {
  const data = [
    {
      name: "Amit",
      profession: "Painter",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Harsh",
      profession: "Thalua",
      image:
        "https://images.unsplash.com/photo-1500214678997-a6adba416e7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: true,
    },
    {
      name: "Lucky",
      profession: "Developer",
      image:
        "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];
  const [realData, setRealData] = useState(data);

  // const [val, setVal] = useState({ name: "lucky", isBanned: false });
  // const [val, setVal] = useState({ name: "lucky", age: 23 });

  // const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  // const [val, setVal] = useState([
  //   { name: "lucky", age: 23 },
  //   { name: "Shivam", age: 34 },
  //   { name: "golu", age: 25 },
  // ]);

  const handleFriendsBtn = (index) => {
    setRealData((prev) => {
      return prev.map((item, ind) => {
        if (ind === index) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

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
      {/* <SomeThing /> */}
      {/* <Props btn={"Know More"} color="bg-blue-600" />
      <Props btn={"Learn More"} color="bg-red-600" />
      <Props btn={"Download Song"} />
      <Props btn={"Read More"} />
      <Props btn={"Sign Up"} /> */}

      <div className="w-full h-screen flex gap-4 items-center justify-center bg-zinc-300">
        {realData?.map((item, index) => (
          <PassData
            key={index}
            values={item}
            handleFriendsBtn={handleFriendsBtn}
            index={index}
            // name={item.name}
            // image={item.image}
            // profession={item.profession}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
