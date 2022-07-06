import { Paper, Line, Set, Circle, Raphael } from "react-raphael";
import React, { useState, useRef, useEffect, useMemo } from "react";
function MemoCircle(props) {
  const { setCoords } = props;
  const circle = {
    attr: { stroke: "red", "stroke-width": 20 },
  };
  const dragStart = (x, y, e) => {
    console.log({ x: x, y: y, e: e });
  };

  const dragMove = (dx, dy, x, y, e) => {
    console.log({ dx: dx, dy: dy, x: x, y: y, e: e });
    // changeCoords(x, y);
    setCoords([x, y]);
  };

  const dragEnd = (e) => {
    // console.log(e);
    // console.log(coords);
  };

  return (
    <Paper width={1000} height={500}>
      <Circle
        x={250}
        y={250}
        r={10}
        attr={circle.attr}
        drag={{
          move: dragMove,
          start: dragStart,
          end: dragEnd,
        }}
      />
    </Paper>
  );
}

export default React.memo(MemoCircle);
