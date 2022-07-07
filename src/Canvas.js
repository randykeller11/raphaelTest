import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import MemoCircle from "./MemoCircle";
import { useState } from "react";

const circleAttr = { stroke: "red", "stroke-width": 20 };

function Canvas() {
  const [coords, setCoords] = useState([250, 250]);
  const [circlePos, setCirclePos] = useState([
    [150, 250],
    [250, 250],
  ]);

  const [isDragging, setIsDragging] = useState(false);

  return (
    <Paper width={1000} height={500}>
      {circlePos &&
        circlePos.map((circle, index) => (
          <MemoCircle
            setCoords={setCoords}
            setIsDragging={setIsDragging}
            setCirclePos={setCirclePos}
            circlePos={circle}
            index={index}
          />
        ))}
      {isDragging && (
        <Circle
          x={coords[1][0]}
          y={coords[1][1]}
          r={10}
          attr={circleAttr}
          toBack={true}
        />
      )}
    </Paper>
  );
}

export default Canvas;
