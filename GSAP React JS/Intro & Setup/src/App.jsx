import { useRef } from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const boxRef = useRef();

  // useGSAP(() => {
  //   gsap.to(boxRef.current, {
  //     x: 600,
  //     // y: 200,
  //   });
  // });

  useGSAP(() => {
    gsap.to(".box", {
      x: 1000,
      delay: 1,
      duration: 2,
      rotate: 360,
      backgroundColor: "blue",
    });
  });

  return (
    <div>
      <div ref={boxRef} className="box"></div>
      <div className="box box1"></div>
      <div className="box box2"></div>
    </div>
  );
}

export default App;
