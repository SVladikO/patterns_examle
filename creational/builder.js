function Meal() {
    this.make = (builder) => {
        builder.step1();
        builder.step2();
        builder.step3();
        builder.step4();
        return builder.get()
    }
}

function MealBuilder(pattie,side,soda) {
    this.step1 = function () {
        this.order = new Order();
    }
    this.step2 = function () {
        this.order.addBurger(pattie)
    }
    this.step3 = function () {
        this.order.addSide(side)
    }
    this.step4 = function () {
        this.order.addSoda(soda)
    }
    this.get = function () {
        return this.order;
    }
}

function Order() {
    this.addBurger = function (type) {
        this.burger = type;
    }
    this.addSide = function (type) {
        this.side = type;
    }
    this.addSoda = function (type) {
        this.soda = type;
    }
    this.display = function () {
        console.log(`Your order: burger-${this.burger}, side-${this.side}, soda-${this.soda}`);
    }
}

let meal = new Meal();
let mealBuilder = new MealBuilder("chicken","curly fries","coke");
let order = meal.make(mealBuilder);
order.display();