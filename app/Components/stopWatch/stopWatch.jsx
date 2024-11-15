"use client";
import React, { useState, useEffect, useRef } from "react";
import "./stopWatch.css"; // Ensure this path is correct

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalIdRef = useRef(null);
  const startInterRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startInterRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      startInterRef.current = Date.now() - elapsedTime;
    }
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopWatch">
      <div className="watch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className="start-btn">
            Start
          </button>
          <button onClick={stop} className="stop-btn">
            Stop
          </button>
          <button onClick={reset} className="reset-btn">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
