import { useState, useEffect } from "react";

const Stopwatch = () => {
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

  return (
    <div>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
        &nbsp;:&nbsp;
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        &nbsp;:&nbsp;
        <span>{("0" + Math.floor((time / 10) % 60)).slice(-2)}</span>
        &nbsp;:&nbsp;
        <span>{("0" + Math.floor((time / 1) % 60)).slice(-2)}</span>
        &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Stopwatch;
