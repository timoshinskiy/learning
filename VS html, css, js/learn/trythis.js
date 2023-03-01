//expression declaration
function trythis() {
    let car = {
        fuel: 95,
        name: "none",
        wheels: 4
    };
    car.fuel = parseInt(document.getElementById("carfuell").value);
    car.name = document.getElementById("carname").value;
    car.wheels = parseInt(document.getElementById("carwheels").value);
    car.isNormal = function() {
        alert(`Engine of ${car.name} started!`);
    };
    car.isNormal();
    console.log(`carfuel = ${car.fuel}`);
    alert('huiii');
    let machine = car;
    car = null;
    machine = {
        isBroken() {
            if (this.fuel > 0 || this.wheels != 4) alert(`${this.name} is broken!`);

        }
    };
    machine.isBroken();
}