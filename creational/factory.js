function CarFactory() {
    this.create = (carDetails) => {
        let car;

        if (carDetails.type == 'sedan') {
            car = new Sedan(carDetails);
        } else if (carDetails.type == 'coupe') {
            car = new Coupe(carDetails);
        }

        return car;
    }
}

function Sedan({type}) {
    this.type = type;
}

function Coupe({type}) {
    this.type = type;
}

let carFactory = new CarFactory();
let carType = {type: 'sedan'};

let car = carFactory.create(carType);
console.log(car.type)


