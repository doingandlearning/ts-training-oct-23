// Types
// Wrap into a model
// var -> let/const
// shapes -> strings

import {
  PI,
  Shape,
  Circle,
  Rectangle,
  RightTriangle,
  Square,
  Trapezium,
} from "./shapes-lib";

function getCircleArea({ radius }: Circle) {
  return radius * radius * PI;
}

function getRectangleArea({ length, width }: Rectangle) {
  return length * width;
}

function getSquareArea({ width }: Square) {
  return width * width;
  return getRectangleArea({ width, length: width, type: "rectangle" });
}

function getRightTriangleArea({ base, height }: RightTriangle) {
  return (base * height) / 2;
}

function getTrapeziumArea({ base, height, top }: Trapezium) {
  return ((base + top) / 2) * height;
}

export function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      return getCircleArea(shape as Circle);
    case "rectangle":
      return getRectangleArea(shape as Rectangle);
    case "square":
      return getSquareArea(shape as Square);
    case "rightTriangle":
      return getRightTriangleArea(shape as RightTriangle);
    case "trapezium":
      return getTrapeziumArea(shape as Trapezium);
  }
}
