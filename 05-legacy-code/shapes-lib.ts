export const PI = Math.PI;

export interface Shape {
  area?: number;
  type: "circle" | "rectangle" | "rightTriangle" | "square" | "trapezium";
}

export interface Circle extends Shape {
  type: "circle";
  radius: number;
}

export interface Rectangle extends Shape {
  length: number;
  width: number;
  type: "rectangle";
}

export interface RightTriangle extends Shape {
  base: number;
  height: number;
  type: "rightTriangle";
}

export interface Square extends Shape {
  width: number;
  type: "square";
}

export interface Trapezium extends Shape {
  height: number;
  base: number;
  top: number;
  type: "trapezium";
}
