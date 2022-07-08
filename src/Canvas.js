import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import MemoCircle from "./MemoCircle";
import { useState, useCallback } from "react";
import UpdatingPath from "./UpdatingPath";

const circleAttr = { stroke: "red", "stroke-width": 20 };
const dragCircleAttr = { stroke: "blue", "stroke-width": 20 };

function Canvas() {
  const [dragCoords, setDragCoords] = useState([0, [250, 250]]);
  const [dataArray, setDataArray] = useState([
    [150, 250],
    [250, 250],
    [350, 250],
    [400, 250],
    [450, 250],
    [500, 250],
  ]);

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

  return (
    <Paper width={1000} height={500} container={paperContainer}>
      <UpdatingPath
        points={dataArray}
        isDragging={isDragging}
        dragCoords={dragCoords}
      />
      {dataArray &&
        dataArray.map((circle, index) => (
          <MemoCircle
            setCoords={setDragCoords}
            setIsDragging={setIsDragging}
            updateCircle={updateCircle}
            circlePos={circle}
            index={index}
          />
        ))}
      {isDragging && (
        <Circle
          x={dragCoords[1][0]}
          y={dragCoords[1][1]}
          r={1}
          attr={dragCircleAttr}
          toBack={true}
        />
      )}
      {isDragging && (
        <Circle
          x={dataArray[targetIndex][0]}
          y={dataArray[targetIndex][1]}
          r={1}
          attr={dragCircleAttr}
          toFront={true}
        />
      )}
    </Paper>
  );
}

export default Canvas;
