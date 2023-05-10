class Calculator {
    constructor(x, y) {
      if(isNaN(x) || isNaN(y) || x == null || y == null || x == undefined || y == undefined){
          throw new Error('Cannot initialise by Undefined values')
      }
      this.value1 = x;
      this.value2 = y;
    }
    addition = () => {
      return this.value1 + this.value2;
    };
    subtraction = () => {
      return this.value1 - this.value2;
    };
    multiplication = () => {
      return this.value1 * this.value2;
    };
    division = () => {
      if (this.value2 == 0) {
        throw new Error("Cannot divide by zero");
      }
  
      return this.value1 / this.value2;
    };
    modulus = () => {
      if (this.value2 == 0) {
        throw new Error("Cannot modularise by zero");
      }
    };
  }
  
  module.exports = { Calculator };
  