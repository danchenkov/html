import Color from 'color'

function degToRad(degrees) {
    return degrees * Math.PI / 180
}

class Triangle {
    constructor(ctx, listId, length, x, y, color) {
        this.ctx = ctx
        this.listId = listId
        this.length = length
        this.x = x
        this.y = y
        this.color = color
        this.name = 'triangle'
    }

    draw(angle = 0) {
        var color = Color(this.color)
        this.ctx.fillStyle = color
        this.ctx.strokeStyle = color.desaturate(0.4).darken(0.25).hex()
        this.ctx.lineWidth = 3
        this.ctx.lineJoin = "miter"
        this.ctx.beginPath()
        this.ctx.moveTo(this.x, this.y)
        this.ctx.lineTo(this.x + this.length * Math.cos(degToRad(angle)), this.y - this.length * Math.sin(degToRad(angle)))
        this.ctx.lineTo(this.x + this.length * Math.cos(degToRad(60 - angle)), this.y + this.length * Math.sin(degToRad(60 - angle)))
        this.ctx.lineTo(this.x, this.y)
        this.ctx.closePath()
        this.ctx.fill()
        this.ctx.stroke()
    }

    reportArea() {
        let listItem = document.createElement('li')
        listItem.textContent = `${this.name} area is ${Math.round((Math.sqrt(3)/4)*(this.length * this.length))}px squared.`

        let list = document.getElementById(this.listId)
        list.appendChild(listItem)
    }

    reportPerimeter() {
        let listItem = document.createElement('li')
        listItem.textContent = `${this.name} perimeter is ${this.length * 3}px.`

        let list = document.getElementById(this.listId)
        list.appendChild(listItem)
    }
}

export { Triangle }
