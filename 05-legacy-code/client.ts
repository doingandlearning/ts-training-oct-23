import { getArea } from "./01-legacy-solution";
import {
  Circle,
  Rectangle,
  RightTriangle,
  Square,
  Trapezium,
} from "./shapes-lib";

const circle: Circle = { type: "circle", radius: 4 };
circle.area = getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: "rectangle", length: 7, width: 4 };
rectangle.area = getArea(rectangle);
console.log(rectangle);

const square: Square = { type: "square", width: 5 };
square.area = getArea(square);
console.log(square);

const rightTriangle: RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
rightTriangle.area = getArea(rightTriangle);
console.log(rightTriangle);

const trapezium: Trapezium = {
  type: "trapezium",
  height: 5,
  base: 4,
  top: 2,
};
trapezium.area = getArea(trapezium);
console.log(trapezium);
