"use client";
import React, { useState, useContext } from "react";

import "./Dreg.css";
import { elementContext } from "../Work_Spase/page"; // Import the context

const DraggableContainer = () => {
  let ele = useContext(elementContext);

  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX);
    setInitialY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - initialX;
    const deltaY = e.clientY - initialY;
    setTranslateX(translateX + deltaX);
    setTranslateY(translateY + deltaY);
    setInitialX(e.clientX);
    setInitialY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClose = (event) => {
    const container = event.target.closest(".conteiner");
    if (container) {
      container.remove();
    }
  };

  return (
    <div
      className="conteiner"
      style={{
        position: "relative",
        cursor: isDragging ? "grabbing" : "grab",
        transform: `translate(${translateX}px, ${translateY}px)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <button
        key={ele.num}
        className="close-note"
        onClick={(event) => handleClose(event)}
      >
        X
      </button>
      {ele.ele}
    </div>
  );
};

export default DraggableContainer;
