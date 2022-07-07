import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import React, { useState, useRef, useEffect, useMemo } from "react";
function MemoCircle(props) {
  const { setCoords, setIsDragging, setCirclePos, circlePos, index } = props;

  const circle = {
    attr: { stroke: "red", "stroke-width": 20 },
  };
  const dragStart = (x, y, e) => {
    console.log({ x: x, y: y, e: e });
    setIsDragging(true);
  };

  const dragMove = (dx, dy, x, y, e) => {
    console.log({ dx: dx, dy: dy, x: x, y: y, e: e });
    // changeCoords(x, y);
    setCoords([index, [x, y]]);
  };

  const dragEnd = (e) => {
    setIsDragging(false);
    // setCirclePos([e.x, e.y]);
    // console.log(e);
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
