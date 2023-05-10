class Rectangle {
    constructor(l, w) {
        this.length = l
        this.width = w
    }
    area = () => {
        return this.length * this.width;
    }
}


module.exports = { Rectangle };