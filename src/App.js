import { useState, useEffect } from "react";
import Button from "./Components/Button/Button";
import Stopwatch from "./Components/Timer/Stopwatch";

import classes from "./App.module.scss";

const App = () => {
 
  return (
    <div className={classes["main-section"]}>
      <div className={classes["clock-holder"]}>
        <div className={classes.stopwatch}>
      <h1>STOPWATCH</h1>
          <Stopwatch  />
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default App;
