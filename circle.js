class Circle {
    constructor(r) {
        this.radius = r;
    }
    circleArea = () => {
        if (this.radius == 0)
            return 0
        if (this.radius == 1)
            return Math.PI

        return Math.pow(this.radius, 2)*Math.PI
    }
}


module.exports = { Circle };