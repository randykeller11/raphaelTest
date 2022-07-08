import "./App.css";
import { useState, useRef, useEffect, useMemo } from "react";
import Canvas from "./Canvas";
function App() {
  return (
    <div>
      <div style={{ position: "absolute", zIndex: 1 }}>
        <img src={"/model.png"} style={{ height: "90vh", width: "auto" }} />
      </div>

      <Canvas />
    </div>
  );
}

export default App;
