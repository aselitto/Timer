import React, { useState, useEffect } from "react";

const calculateTimeLeft = () => {
  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let targetMinute = 25;

  if (minutes >= 25 && minutes < 55) {
    targetMinute = 55;
  } else if (minutes >= 55) {
    targetMinute = 85; // This is effectively the 25th minute of the next hour.
  }

  const timeLeft = (targetMinute - minutes - 1) * 60 + (60 - seconds);
  return timeLeft;
};

const displayTime = (timeLeft) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

function Timer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [activity, setActivity] = useState("");

  useEffect(() => {
    // Update the timer every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Handle the reset of the timer
  const resetTimer = () => {
    setTimeLeft(calculateTimeLeft());
  };

  // Optionally, handle what happens when the timer reaches 0
  useEffect(() => {
    if (timeLeft <= 0) {
      // Trigger any action upon reaching 0
      // For now, we'll just reset the timer
      resetTimer();
    }
  }, [timeLeft]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>{displayTime(timeLeft)}</div>
      {timeLeft <= 0 && (
        <div>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="What were you working on?"
          />
          <button onClick={resetTimer}>Reset Timer</button>
        </div>
      )}
    </div>
  );
}

export default Timer;
