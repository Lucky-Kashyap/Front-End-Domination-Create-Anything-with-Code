import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    console.log("SErvices Run");

    return () => {
      console.log("SErvice Destroyed");
    };
  });

  return <div>Services</div>;
};

export default Services;
