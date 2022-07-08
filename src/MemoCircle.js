import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import React, { useState, useRef, useEffect, useMemo } from "react";
function MemoCircle(props) {
  const {
    setCoords,
    setIsDragging,
    updateCircle,
    circlePos,
    zoomFactor,
    index,
  } = props;

  const circle = {
    attr: { stroke: "red", "stroke-width": 20 },
  };

  const calculateZoom = (coords) => {
    const newX = coords[0] / zoomFactor;
    const newY = coords[1] / zoomFactor;
    // console.log([newX, newY]);
    return [newX, newY];
  };

  const dragStart = (x, y, e) => {
    console.log({ x: x, y: y, e: e });
    setIsDragging(true);
    // setCoords([index, [x / zoomFactor, y / zoomFactor]]);
  };

  const dragMove = (dx, dy, x, y, e) => {
    console.log({ dx: dx, dy: dy, x: x, y: y, e: e });
    // changeCoords(x, y);
    // setCoords([index, calculateZoom([x, y])]);
  };

  const dragEnd = (e) => {
    setIsDragging(false);
    updateCircle(index, calculateZoom([e.x, e.y]));
    console.log(e);
    // console.log(coords);
  };

  return (
    <Circle
      x={circlePos[0]}
      y={circlePos[1]}
      r={1}
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
