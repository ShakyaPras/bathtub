import React, { useState, useEffect } from "react";

let interval;
const Bathtub = () => {
  const [level, setLevel] = useState(0);
  const [waterLevel, setWaterLevel] = useState([]);
  const water = <div className="water"></div>;
  useEffect(() => {
    if (level <= 0 || level >= 5) {
      clearInterval(interval);
    }
  }, [level]);

  useEffect(() => {
    setWaterLevel([]);

    for (let i = 0; i < level; i++) {
      setWaterLevel((waterLevel) => [...waterLevel, water]);
    }
  }, [level]);

  const increase = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      setLevel((level) => level + 1);
    }, 2000);
  };

  const decrease = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      setLevel((level) => level - 1);
    }, 2000);
  };

  return (
    <div className="button-container">
      <button className="button increaseWaterLevel" onClick={increase}>
        Increase Water Level
      </button>
      <button className="button decreaseWaterLevel" onClick={decrease}>
        Decrease Water Level
      </button>

      <div className="bathtub">{waterLevel}</div>
    </div>
  );
};

export default Bathtub;
