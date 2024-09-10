import { useRef } from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const boxRef = useRef();
  const circleRef = useRef();
  const tl = gsap.timeline();

  // useGSAP(() => {
  //   gsap.to(boxRef.current, {
  //     x: 600,
  //     // y: 200,
  //   });
  // });

  // useGSAP(() => {
  //   gsap.to(".box", {
  //     x: 1000,
  //     delay: 1,
  //     duration: 2,
  //     rotate: 360,
  //     backgroundColor: "blue",
  //   });
  // });

  // useGSAP(() => {
  // gsap.to(boxRef.current, {
  //   x: 1200,
  //   rotate: 360,
  //   borderRadius: "50%",
  //   duration: 2,
  //   delay: 1,
  // });
  // gsap.to(circleRef.current, {
  //   x: 1200,
  //   rotate: 360,
  //   borderRadius: "10px",
  //   duration: 2,
  //   delay: 1,
  // });
  //   tl.to(boxRef.current, {
  //     x: 1200,
  //     rotate: 360,
  //     borderRadius: "50%",
  //     duration: 2,
  //     delay: 1,
  //   });
  //   tl.to(circleRef.current, {
  //     x: 1200,
  //     rotate: 360,
  //     borderRadius: "10px",
  //     duration: 2,
  //   });
  // });

  useGSAP(
    () => {
      gsap.to(".box", {
        rotate: 360,
        duration: 1.5,
        delay: 1,
      });
    },
    { scope: ".container1" }
  );
  return (
    <main>
      {/*<div className="parent">
       <div ref={boxRef} className="box"></div>
      <div className="box box1"></div>
      <div className="box box2"></div> 
      <div ref={boxRef} className="box"></div>
      <div ref={circleRef} className="circle"></div>
    </div> */}

      <div className="container1">
        <div className="box"></div>
        <div className="circle"></div>
      </div>
      <div className="container2">
        <div className="box"></div>
        <div className="circle"></div>
      </div>
    </main>
  );
}

export default App;
