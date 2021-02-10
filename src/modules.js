import { Canvas } from './modules/canvas'

let circleBtn = document.querySelector('.circle')
let squareBtn = document.querySelector('.square')
let triangleBtn = document.querySelector('.triangle')

// create the canvas and reporting list
let myCanvas = new Canvas('myCanvas', document.body, 480, 320)
myCanvas.create()
myCanvas.createReportList()

// draw a square
squareBtn.addEventListener('click', () => {
    import('./modules/square').then((Module) => {
        let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 115, 40, 40, 'hsl(290, 94%, 30%)')
        square1.draw()
        square1.reportArea()
        square1.reportPerimeter()
    })
})

// draw a circle
circleBtn.addEventListener('click', () => {
    import('./modules/circle').then((Module) => {
        let circle1 = new Module.Circle(myCanvas.ctx, myCanvas.listId, 75, 320, 100, 'green')
        circle1.draw()
        circle1.reportArea()
        circle1.reportPerimeter()
    })
})

// draw a triangle
triangleBtn.addEventListener('click', () => {
    import('./modules/triangle').then((Module) => {
        let triangle1 = new Module.Triangle(myCanvas.ctx, myCanvas.listId, 100, 125, 190, 'yellow')
        triangle1.draw(11)
        triangle1.reportArea()
        triangle1.reportPerimeter()
    })
})
