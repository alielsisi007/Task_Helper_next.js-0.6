"use client";
import React, { useRef, useState, useEffect } from "react";

const MapDrawing = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [from, setFrom] = useState([0, 0]);

  console.log(from, isDrawing);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue"; // Set fill color
    ctx.strokeStyle = "black"; // Set stroke color
    ctx.lineWidth = 2; // Set line width
    ctx.globalAlpha = 0.5; // Set transparency
  }, []);

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

      // Draw grid squares on the canvas
      const squareSize = 50;
      for (let x = 0; x < canvas.width; x += squareSize) {
        for (let y = 0; y < canvas.height; y += squareSize) {
          ctx.beginPath();
          ctx.rect(x, y, squareSize, squareSize);
          ctx.stroke();
          ctx.closePath();
        }
      }

      // Highlight the square where the cursor is located
      const currentSquareX =
        Math.floor(e.nativeEvent.offsetX / squareSize) * squareSize;
      const currentSquareY =
        Math.floor(e.nativeEvent.offsetY / squareSize) * squareSize;

      ctx.fillStyle = "yellow"; // Set fill color for current square highlight
      ctx.fillRect(currentSquareX, currentSquareY, squareSize, squareSize);
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

export default MapDrawing;
