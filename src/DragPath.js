import { Path } from "react-raphael";

function DragPath() {
  const pathAttr = { stroke: "blue", "stroke-width": 5 };

  return <Path d={"M 100 200 L 200 100 250 300"} attr={pathAttr} />;
}

export default DragPath;
