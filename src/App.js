import { useState, useEffect } from "react";
import Stopwatch from "./Components/Timer/Stopwatch";

import classes from "./App.module.scss";

const App = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start]);
  const handleStart = () => {
    setStart(true);
  };
  const handleStop = () => {
    setStart(false);
  };
  const handleResume = () => {
    setStart(true);
  };
  const handleReset = () => {
    setTime(0);
  };
  return (
    <div className={classes["main-section"]}>
      <div className={classes["clock-holder"]}>
        <div className={classes.stopwatch}>
          <h1>STOPWATCH</h1>
          <div>
            <Stopwatch time={time} />
          </div>
        </div>
        <div className={classes["stopwatch"]}>
          <div className={classes["stopwatch-btn"]}>
            {!start && time === 0 && (
              <button
                className={classes["stopwatch-btn-red"]}
                onClick={handleStart}
              >
                Start
              </button>
            )}

            {start && (
              <button
                className={classes["stopwatch-btn-yel"]}
                onClick={handleStop}
              >
                Stop
              </button>
            )}

            {!start && time !== 0 && (
              <button
                className={classes["stopwatch-btn-gre"]}
                onClick={handleResume}
              >
                Resume
              </button>
            )}
            {!start && time > 0 && (
              <button
                className={classes["stopwatch-btn-green"]}
                onClick={handleReset}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
