import classes from "./Button.module.scss";

const Button = () => {
  const handleStart = () => {
    setStart(true);
  };

  const handlePaused = () => {
    setStart(false);
  };

  const handleReset = () => {
    setStart(0);
  };

  return (
    <div>
      {!start &&time===0&&<button onClick={handleStart}>Start</button>}
      {start && time !==0&& <button onClick={handlePaused}>Stop</button>}
      {!start && time >0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Button;
