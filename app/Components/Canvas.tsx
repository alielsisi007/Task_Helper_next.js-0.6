"use client";
import React, { useRef, useState } from "react";

const CanvasDrawing = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [from, setFrom] = useState([0, 0]);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    setFrom([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
  };

  const handleMouseMove = (e) => {
    if (isDrawing) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "blue"; // Set fill color
      ctx.strokeStyle = "black"; // Set stroke color
      ctx.lineWidth = 2; // Set line width
      ctx.globalAlpha = 0.5; // Set transparency

      ctx.beginPath();
      ctx.rect(
        from[0],
        from[1],
        e.nativeEvent.offsetX - from[0],
        e.nativeEvent.offsetY - from[1]
      );
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ border: "1px solid black" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ></canvas>
  );
};

export default CanvasDrawing;
