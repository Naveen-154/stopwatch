import React, { useState, useRef } from 'react';
import './stopwatch.css';
import image1 from "../assets/images/timer.png"

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (running) {
      setRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="timer">
        <div className="time-display">
          <img src={image1} alt="Timer Icon" className="icon" />
          <h2>Timer</h2>
          <div className="time">{new Date(time * 1000).toISOString().substr(11, 8)}</div>
        </div>
        <div className="buttons">
          <button className="start" onClick={startTimer}>Start</button>
          <button className="stop" onClick={stopTimer}>Stop</button>
          <button className="reset" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;