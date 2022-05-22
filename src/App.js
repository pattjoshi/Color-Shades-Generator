import React, { useEffect, useState } from "react";
import "./App.css";
import Shades from "./components/Shades";
import Shadelnput from "./components/Shadelnput";
import Shade from "./components/Shade";

import randomcolor from "randomcolor";

const App = () => {
  const [color, setColor] = useState("#000");

  useEffect(() => {
    setColor(randomcolor);
  }, []);

  const onInputChange = (value) => {
    setColor(value);
  };

  return (
    <div>
      <Shadelnput color={color} onInputChange={onInputChange} />
      <Shades color={color} />
    </div>
  );
};

export default App;
