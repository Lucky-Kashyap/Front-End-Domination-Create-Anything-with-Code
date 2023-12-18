import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Song from "./components/Song";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      songName: "Tum hi ho",
      artistName: "Arjit Singh",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },
    {
      songName: "Dil Se Re",
      artistName: "A.R. Rahman",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },

    {
      songName: "Mera Dil Bhi Kitna Pagal Hai",
      artistName: "Alka Yagnik",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },

    {
      songName: "Jeeta Tha Jiske Liye",
      artistName: "Kumar Sanu",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },
    {
      songName: "Shiv Tandav Stotram",
      artistName: "Shankar Mahadevan",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },

    {
      songName: "Haan Tu Hain",
      artistName: "K.K",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  // const [song, setSong] = useState(data);
  // const [favouritesCount, setFavouritesCount] = useState(0);

  // const handleFavourites = (index) => {
  //   setSong((prev) => {
  //     return prev.map((item, indx) => {
  //       if (indx === index) {
  //         return { ...item, favourites: !item.favourites };
  //       }

  //       return item;
  //     });
  //   });

  //   setFavouritesCount((prev) => prev + 1);
  // };

  const handleClick = (index) => {
    return setSongData((prev) => {
      return prev.map((item, indx) => {
        if (index === indx) {
          return { ...item, favourites: !item.favourites };
        }

        return item;
      });
    });
  };

  return (
    // <div className="p-10">
    //   <Header
    //     favouritesCount={favouritesCount}
    //     setFavouritesCount={setFavouritesCount}
    //   />
    //   <div className="w-full h-52 flex gap-20 flex-wrap mt-10 justify-between">
    //     {song.map((item, indx) => (
    //       <Card song={item} handleFavourites={handleFavourites} index={indx} />
    //     ))}
    //   </div>
    // </div>

    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar songData={songData} />
        <div className="px-20 flex flex-wrap gap-10 mt-10">
          {songData.map((item, index) => (
            <Song
              key={index}
              values={item}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
