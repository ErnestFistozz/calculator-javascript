class Circle {
    // constructor(r) {
    //     this.radius = r;
    // }
    circleArea = (radius) => {
        if (radius == 0)
            return 0
        if (radius == 1)
            return Math.PI

        return Math.pow(radius, 2)*Math.PI
    }
}


module.exports = { Circle };