import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen flex">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a
          className="py-3 px-5 border rounded border-blue-200 text-blue-200"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl font-semibold mb-3 w-[80%]">Category Filter</h1>
        <ul className="w-[80%]">
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
            Cat 1
          </li>
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
            Cat 2
          </li>
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
            Cat 3
          </li>
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
            Cat 4
          </li>
        </ul>
      </nav>

      <div className="w-[85%] h-full bg-red-100"></div>
    </div>
  );
}

export default App;
