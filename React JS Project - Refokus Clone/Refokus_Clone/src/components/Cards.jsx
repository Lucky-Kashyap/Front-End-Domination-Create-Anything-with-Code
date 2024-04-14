import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <Card
          width={"basis-1/3"}
          start={false}
          para={true}
          heading="Up Next: News"
          text="Insights and behind the scenes"
          team="Explore what drives our team"
        />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          hover={"bg-violet-600"}
          heading="Get In Touch"
          text="Let's get to it, together"
        />
      </div>
    </div>
  );
};

export default Cards;
