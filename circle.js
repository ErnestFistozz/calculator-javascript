
    circleArea = (radius) => {
        if (radius == 0){
            console.log('radius is zero')
            return 0
        }
        if (radius == 1)
        {   
            let x = 4
            return Math.PI
        }

        return Math.pow(radius, 2)*Math.PI
    }



module.exports = { circleArea };