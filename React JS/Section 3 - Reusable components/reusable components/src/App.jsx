import "./App.css";
import Card from "./components/Card";

function App() {
  // const name = "Lucky";
  const data = ["ajay", "rahul", "sachin", "udesh"];

  // const data = [];

  return (
    <div>
      {/* {data.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))} */}

      {/* {data.map((item, index) => (
        <div key={index} className="px-3 py-4 w-fit bg-zinc-300 rounded-md">
          {item}
        </div>
      ))} */}

      <Card />
    </div>
  );
}

export default App;
