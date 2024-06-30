"use client";
// components/PomodoroTimer.js
import { useState, useEffect } from "react";
import "./Timer.css";
const Timer = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // Timer completed, handle your logic (e.g., play a sound)
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime(1500); // Reset to 25 minutes
    setIsActive(false);
  };

  const handelReset = () => {
    let inputTime = document.querySelector(".inp-time").value;
    if (+inputTime > 0 && typeof +inputTime === "number") {
      setTime((t) => +inputTime * 60);
    }
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="time">
      <input
        type="number"
        style={{ overflow: "hidden" }}
        className="inp-time"
        min={0}
      />
      <p>{formatTime(time)}</p>
      <button className="btn-start" onClick={startTimer}>
        Start
      </button>
      <button className="btn-pause" onClick={pauseTimer}>
        Pause
      </button>
      <button className="btn-reset" onClick={resetTimer}>
        Reset
      </button>
      <button className="btn-change" onClick={handelReset}>
        Change
      </button>
    </div>
  );
};

export default Timer;
