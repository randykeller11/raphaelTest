import { Path } from "react-raphael";

function UpdatingPath(props) {
  const { points, isDragging, dragCoords, zoomFactor } = props;
  const pathAttr = { stroke: "blue", "stroke-width": 5 };

  const calculateZoom = (coords) => {
    let newX = coords[0] * zoomFactor;
    let newY = coords[1] * zoomFactor;
    return [newX, newY];
  };

  const zoomAdjustPoints = () => {
    let returnArray = [];
    points.forEach((coord, i) => {
      returnArray[i] = calculateZoom(coord);
    });
    console.log(returnArray);
    return returnArray;
  };

  const generateSVG = (_points) => {
    let returnString = "";
    _points.forEach((point, i) => {
      if (i === 0) {
        returnString += `M ${point[0]} ${point[1]} `;
      } else if (i === 1) {
        returnString += `L ${point[0]} ${point[1]} `;
      } else {
        returnString += `${point[0]} ${point[1]} `;
      }
    });
    console.log(returnString);
    return returnString;
  };
  let zoomedPoints = zoomAdjustPoints(points);
  if (isDragging) {
    let localArray = [...zoomedPoints];
    localArray[dragCoords[0]] = zoomAdjustPoints(dragCoords[1]);
    const SVGDragString = generateSVG(localArray);

    return <Path d={SVGDragString} attr={pathAttr} />;
  } else {
    const SVGString = generateSVG(zoomedPoints);

    return <Path d={SVGString} attr={pathAttr} />;
  }
}

export default UpdatingPath;
