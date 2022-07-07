import { Path } from "react-raphael";

function CustomPath(props) {
  const { points, isDragging, targetPoint, dragCoords } = props;
  const pathAttr = { stroke: "blue", "stroke-width": 5 };

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

  const SVGString = generateSVG(points);

  return <Path d={SVGString} attr={pathAttr} />;
}

export default CustomPath;
