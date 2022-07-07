import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import MemoCircle from "./MemoCircle";
import { useState, useCallback } from "react";
import UpdatingPath from "./UpdatingPath";

const circleAttr = { stroke: "red", "stroke-width": 20 };

function Canvas() {
  const [dragCoords, setDragCoords] = useState([250, 250]);
  const [dataArray, setDataArray] = useState([
    [150, 250],
    [250, 250],
    [350, 250],
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

  return (
    <Paper width={1000} height={500}>
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
          r={10}
          attr={circleAttr}
          toBack={true}
        />
      )}
    </Paper>
  );
}

export default Canvas;
