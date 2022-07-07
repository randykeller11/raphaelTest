import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import React, { useState, useRef, useEffect, useMemo } from "react";
function MemoCircle(props) {
  const {
    setDragCoords,
    setIsDragging,
    setTargetPoint,
    updatePoint,
    circlePos,
    index,
  } = props;

  const circle = {
    attr: { stroke: "red", "stroke-width": 20 },
  };
  const dragStart = (x, y, e) => {
    console.log({ x: x, y: y, e: e });
    // setTargetPoint(index);
    // setIsDragging(true);
  };

  const dragMove = (dx, dy, x, y, e) => {
    console.log({ dx: dx, dy: dy, x: x, y: y, e: e });
    // setDragCoords([x, y]);
  };

  const dragEnd = (e) => {
    // setIsDragging(false);
    updatePoint(index, [e.x, e.y]);
    console.log(e);
    // console.log(coords);
  };

  return (
    <Circle
      x={circlePos[0]}
      y={circlePos[1]}
      r={10}
      attr={circle.attr}
      toFront={true}
      drag={{
        move: dragMove,
        start: dragStart,
        end: dragEnd,
      }}
    />
  );
}

export default React.memo(MemoCircle);
