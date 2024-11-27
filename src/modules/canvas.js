class Canvas {
    constructor(id, parent, width, height) {
        this.id = id
        this.listId = null
        this.parent = parent
        this.width = width
        this.height = height
        this.ctx = null
    }

    // new class stuff above here

    create() {
        if (this.ctx !== null) {
            console.log('Canvas already created!')
        } else {
            const divWrapper = document.createElement('div')
            const canvasElem = document.createElement('canvas')
            this.parent.appendChild(divWrapper)
            divWrapper.appendChild(canvasElem)

            divWrapper.id = this.id
            canvasElem.width = this.width
            canvasElem.height = this.height

            this.ctx = canvasElem.getContext('2d')
        }
    }

    createReportList() {
        if (this.listId !== null) {
            console.log('Report list already created!')
        } else {
            const list = document.createElement('ul')
            list.id = this.id + '-reporter'

            const canvasWrapper = document.getElementById(this.id)
            canvasWrapper.appendChild(list)

            this.listId = list.id
        }
    }
}

export { Canvas }
