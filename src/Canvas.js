import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import MemoCircle from "./MemoCircle";
import { useState, useCallback } from "react";
import UpdatingPath from "./UpdatingPath";

const circleAttr = { stroke: "red", "stroke-width": 20 };
const dragCircleAttr = { stroke: "blue", "stroke-width": 20 };

function Canvas() {
  const [dragCoords, setDragCoords] = useState([0, [0.25, 0.25]]);
  const [dataArray, setDataArray] = useState([
    [0.15, 0.25],
    [0.25, 0.25],
    [0.35, 0.25],
    [0.4, 0.25],
    [0.45, 0.25],
    [0.5, 0.25],
  ]);

  const [zoomFactor, setZoomFactor] = useState(1000);

  const [isDragging, setIsDragging] = useState(false);

  const updateCircle = useCallback(
    (index, updateCoords) => {
      let returnArray = [...dataArray];
      returnArray[index] = updateCoords;
      // console.log(returnArray);
      setDataArray(returnArray);
    },
    [dataArray]
  );

  const targetIndex = dragCoords[0];

  const paperContainer = {
    style: {
      border: "2px solid red",
      zIndex: "2",
      position: "relative",
      height: "90vh",
      width: "90vw",
    },
    className: "",
  };

  const calculateZoom = (coords) => {
    let newX = coords[0] * zoomFactor;
    let newY = coords[1] * zoomFactor;
    // console.log([newX, newY]);
    return [newX, newY];
  };

  return (
    <Paper width={1000} height={500} container={paperContainer}>
      <UpdatingPath
        points={dataArray}
        isDragging={isDragging}
        dragCoords={dragCoords}
        zoomFactor={zoomFactor}
      />
      {dataArray &&
        dataArray.map((circle, index) => (
          <MemoCircle
            setCoords={setDragCoords}
            setIsDragging={setIsDragging}
            updateCircle={updateCircle}
            circlePos={calculateZoom(circle)}
            zoomFactor={zoomFactor}
            index={index}
          />
        ))}
      {isDragging && (
        <Circle
          x={dragCoords[1][0] * zoomFactor}
          y={dragCoords[1][1] * zoomFactor}
          r={1}
          attr={dragCircleAttr}
          toBack={true}
        />
      )}
      {isDragging && (
        <Circle
          x={dataArray[targetIndex][0] * zoomFactor}
          y={dataArray[targetIndex][1] * zoomFactor}
          r={1}
          attr={dragCircleAttr}
          toFront={true}
        />
      )}
    </Paper>
  );
}

export default Canvas;
