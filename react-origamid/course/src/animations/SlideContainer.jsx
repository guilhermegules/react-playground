import React from "react";

import Slide from "./Slide";

const SlideContainer = () => {
  const slides = [
    {
      id: "1",
      text: "slide 1",
    },
    {
      id: "2",
      text: "slide 2",
    },
    {
      id: "3",
      text: "slide 3",
    },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default SlideContainer;
