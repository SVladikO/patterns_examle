class OldCar {
    startEngine() {
        console.log('old')
    }
}

class NewCar {
    startNewEngine() {
        console.log('new')
    }
}


class CarAdapter {
    constructor(car) {
        this.car = car;
    }

    startEngine() {
        this.car.startNewEngine()
    }
}


let newCar = new NewCar();
let carAdapter = new CarAdapter(newCar)
carAdapter.startEngine();
