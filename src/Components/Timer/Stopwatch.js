import { useState, useEffect } from "react";

import classes from './Stopwatch.module.scss'

const Stopwatch = ({time}) => {
  return (
    <div>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
      &nbsp;:&nbsp;
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
      &nbsp;:&nbsp;
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      &nbsp;:&nbsp;
      <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      &nbsp;:&nbsp;
    </div>
  );
};

export default Stopwatch;
