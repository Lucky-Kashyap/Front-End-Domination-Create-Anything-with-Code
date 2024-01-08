import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <Link
          to="/details/1"
          className="card mr-3 mb-3 p-3 border shadow rounded h-[30vh] w-[18%]  flex flex-col justify-center items-center"
        >
          <div
            className="hover:scale-110 mb-3 w-full h-[80%] bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-300">Lorem ipsum dolor sit.</h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
