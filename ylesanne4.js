class Shape {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
    getArea() {
        console.log('Area of shape')
    }
}

//circle

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    print() {
        return `Circle (r: ${this.radius}, color: ${this.color}).`
    }
}

const circle1 = new Circle('red', 5)
circle1.setColor('blue')
console.log(circle1)
console.log(circle1.getArea())
console.log(circle1.print())

//square

class Square extends Shape {
    constructor(color, side) {
        super(color)
        this.side = side
    }
    getArea() {
        return this.side * this.side
    }
    print() {
        return `Square (r: ${this.side}, color: ${this.color}).`
    }
}

const square1 = new Square('black', 5)
square1.setColor('grey')
console.log(square1)
console.log(square1.getArea())
console.log(square1.print())

//rectangle

class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color)
        this.length = length
        this.width = width
    }
    getArea() {
        return this.length * this.width
    }
    print() {
        return `Rectangle (length: ${this.length}, width: ${this.width}, color: ${this.color}).`
    }
}

class Paint {
    constructor() {
        this.shapes = []
    }
    addShape(shape) {
        this.shapes.push(shape)
    }
    getShape() {
        return this.shapes
    }
    calculateTotalArea() {
        let total
        this.shapes.forEach(shape => {
            total += shape.getArea()
        })
        return total
    }


    getCircles() {
        return this.shapes.filter(shape => shape instanceof Circle)
    }
    getSquares() {
        return this.shapes.filter(shape => shape instanceof Square)
    }
    getRectangles() {
        return this.shapes.filter(shape => shape instanceof Rectangle)
    }
}
const rectangle2 = new Rectangle('black', 2, 1)
const rectangle1 = new Rectangle('cyan', 5, 10)
const square3 = new Rectangle('red', 1, 2)
const square2 = new Rectangle('white', 3, 4)
const circle = new Circle('brown', 3, 4)
const paint = new Paint()
paint.addShape(rectangle1)
paint.addShape(rectangle2)
paint.addShape(square3)
paint.addShape(square2)
paint.addShape(circle)
console.log(paint)
console.log(paint.calculateTotalArea())
console.log(paint.getCircles())
console.log(paint.getSquares())
console.log(paint.getRectangles())