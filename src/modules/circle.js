import Color from 'color'

function degToRad(degrees) {
    return degrees * Math.PI / 180
}

class Circle {
    constructor(ctx, listId, radius, x, y, color) {
        this.ctx = ctx
        this.listId = listId
        this.radius = radius
        this.x = x
        this.y = y
        this.color = color
        this.name = 'circle'
    }

    draw() {
        var color = Color(this.color)
        this.ctx.fillStyle = color
        this.ctx.strokeStyle = color.desaturate(0.4).darken(0.25).hex()
        this.ctx.lineWidth = 3
        this.ctx.lineJoin = "miter"
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, degToRad(0), degToRad(360), false)
        this.ctx.closePath()
        this.ctx.fill()
        this.ctx.stroke()
    }

    reportArea() {
        let listItem = document.createElement('li')
        listItem.textContent = `${this.name} area is ${Math.round(Math.PI * (this.radius * this.radius))}px squared.`

        let list = document.getElementById(this.listId)
        list.appendChild(listItem)
    }

    reportPerimeter() {
        let listItem = document.createElement('li')
        listItem.textContent = `${this.name} circumference is ${Math.round(2 * Math.PI * this.radius)}px.`

        let list = document.getElementById(this.listId)
        list.appendChild(listItem)
    }
}

export { Circle }
