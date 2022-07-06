import "./App.css";
import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import { useState, useRef, useEffect, useMemo } from "react";
import MemoCircle from "./MemoCircle";

function App() {
  const [coords, setCoords] = useState([250, 250]);

  return (
    <>
      <MemoCircle setCoords={setCoords} />
      <h1>
        x:{coords[0]} y:{coords[1]}
      </h1>
    </>
  );
}

export default App;
