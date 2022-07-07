import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import MemoCircle from "./MemoCircle";
import { useState, useEffect } from "react";
import CustomPath from "./CustomPath";
import DragPath from "./DragPath";

function Canvas() {
  const [dragCoords, setDragCoords] = useState(null);
  const [targetPoint, setTargetPoint] = useState(null);
  const [points, setPoints] = useState([
    [100, 250],
    [250, 250],
    [450, 250],
  ]);

  const [isDragging, setIsDragging] = useState(false);

  const circleAttr = { stroke: "blue", "stroke-width": 20 };

  const dragCircleAttr = {
    stroke: "purple",
    "stroke-width": 20,
  };

  const updatePoint = (index, updateValue) => {
    let updateArray = [...points];
    updateArray[index] = updateValue;
    setPoints(updateArray);
  };

  return (
    <>
      <Paper width={1000} height={500}>
        {/* <CustomPath
          points={points}
          isDragging={isDragging}
          dragCoords={dragCoords}
          targetPoint={targetPoint}
        /> */}
        {points &&
          points.map((point, i) => (
            <MemoCircle
              setDragCoords={setDragCoords}
              setIsDragging={setIsDragging}
              setTargetPoint={setTargetPoint}
              updatePoint={updatePoint}
              circlePos={point}
              index={i}
            />
          ))}
        {/* {isDragging && (
          <Circle
            x={coords[0]}
            y={coords[1]}
            r={10}
            attr={circleAttr}
            toBack={true}
          />
        )}
        {isDragging && (
          <Circle
            x={circlePos[0]}
            y={circlePos[1]}
            r={10}
            attr={circleAttr}
            toFront={true}
          />
        )} */}
      </Paper>
    </>
  );
}

export default Canvas;
