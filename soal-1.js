class Shape {
  constructor(numSides, sideLengths) {
    this.numSides = numSides;
    this.sideLengths = sideLengths;
  }

  getNumSides() {
    return this.numSides;
  }

  getSideLengths() {
    return this.sideLengths;
  }

  getPerimeter() {
    return this.sideLengths.reduce((acc, val) => acc + val, 0);
  }
}

class Triangle extends Shape {
  constructor(sideLengths) {
    super(3, sideLengths);
  }

  getArea() {
    const [a, b, c] = this.sideLengths;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

class Rectangle extends Shape {
  constructor(sideLengths) {
    super(4, sideLengths);
  }

  getArea() {
    return this.sideLengths[0] * this.sideLengths[1];
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(0, []);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const triangle = new Triangle([3, 4, 5]);
console.log(triangle.getArea()); // Output: 6
console.log(triangle.getPerimeter()); // Output: 12

const rectangle = new Rectangle([4, 6]);
console.log(rectangle.getArea()); // Output: 24
console.log(rectangle.getPerimeter()); // Output: 20

const circle = new Circle(5);
console.log(circle.getArea()); // Output: 78.53981633974483
console.log(circle.getPerimeter()); // Output: 31.41592653589793
