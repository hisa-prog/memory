import React from "react";
import Draggable from "react-draggable";

export default function Empty() {
  return (
    <Draggable handle="strong">
      <div className="lg:col-start-3 lg:col-span-8 lg:px-0 col-span-2 px-4 pointer-events-auto mx-5p"></div>
    </Draggable>
  );
}
