"use client";
import React, { useState, useContext } from "react";

import "./Dreg.css";
import { ElementContext } from "../Work_Spase/work_spase";
export default function DraggableContainer() {
  let ele = useContext(ElementContext);
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handleMouseDown = (e: {
    clientX: React.SetStateAction<number>;
    clientY: React.SetStateAction<number>;
  }) => {
    setIsDragging(true);
    setInitialX(e.clientX);
    setInitialY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const handleClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const container = (event.target as HTMLElement).closest(".conteiner");

    if (container) {
      container.remove();
    }
  };
  const components: { ele: string | number | bigint | boolean | React.ReactPortal | Promise<React.AwaitedReactNode> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }[] = [];
  
  return (
    <>
      {components.map((ele: { ele: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
        <div
          key={index} // Use the index as the key
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
            className="close-note"
            onClick={(event) => handleClose(event)}
          >
            X
          </button>
          {ele.ele}
        </div>
      ))}
    </>
  );
}
