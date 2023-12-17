import "./App.css";
import Card from "./components/Card";

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
      <Card />
    </div>
  );
}

export default App;
