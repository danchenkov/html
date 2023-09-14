import Color from 'color'

class Square {
    constructor(ctx, listId, length, x, y, color) {
        this.ctx = ctx
        this.listId = listId
        this.length = length
        this.x = x
        this.y = y
        this.color = color
        this.name = 'square'
    }

    draw() {
        var color = Color(this.color)
        this.ctx.fillStyle = color
        this.ctx.strokeStyle = color.desaturate(0.4).darken(0.25).hex()
        this.ctx.lineWidth = 3
        this.ctx.lineJoin = "miter"
        this.ctx.closePath()
        this.ctx.fillRect(this.x, this.y, this.length, this.length)
        this.ctx.strokeRect(this.x, this.y, this.length, this.length)
    }

    reportArea() {
        let listItem = document.createElement('li')
        listItem.textContent = `${this.name} area is ${this.length * this.length}px squared.`

        let list = document.getElementById(this.listId)
        list.appendChild(listItem)
    }

    reportPerimeter() {
        let listItem = document.createElement('li')
        listItem.textContent = `${this.name} perimeter is ${this.length * 4}px.`

        let list = document.getElementById(this.listId)
        list.appendChild(listItem)
    }
}

export { Square }
