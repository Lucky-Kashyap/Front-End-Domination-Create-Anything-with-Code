import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/reducers/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-6 mt-5 bg-red-100">
      <h1 className="text-center text-3xl font-bold text-red-900">
        Let's Start Redux Toolkit
      </h1>

      <div className="p-4">
        <button
          className="p-4 bg-blue-500 rounded m-4 text-white font-semibold"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="font-semibold text-zinc-700 text-4xl">{count}</span>
        <button
          className="p-4 bg-orange-500 rounded m-4 text-white font-semibold"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
