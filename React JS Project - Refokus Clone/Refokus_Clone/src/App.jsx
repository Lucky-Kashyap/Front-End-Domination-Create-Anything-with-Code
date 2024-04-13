import Navbar from "./components/Navbar";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

function App() {
  return (
    <div className="w-full h-full bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
    </div>
  );
}

export default App;
