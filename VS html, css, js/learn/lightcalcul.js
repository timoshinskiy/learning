'use strict'

let Calculator = {
    read() {
        this.obj1 = parseInt(prompt('Введите первое число'));
        this.obj2 = parseInt(prompt('Введите второе число'));
    },
    sum() {
        return (
            this.obj1 + this.obj2
        )
    },
    mul() {
        return (
            this.obj1 * this.obj2
        )
    }
};
let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());