class Handler {
    setNextEmp(handler) {
        this.nextWorker = handler;
    }
    assignWork(req) {

    }
}

class Employee {
    constructor(name, competition) {
        this.name = name;
        this.competition = competition;
    }

    getCompetition() {
        return this.competition;
    }

    getName() {
        return this.name;
    }
}

class EasyLevelWorkHandler extends Handler {
    constructor() {
        super();
        this.nextWorker = new Handler();
    }

    assignWork(req) {
        if ("Easy" == req.getCompetition()) {
            console.log(req.getCompetition() + ' work assigned to: ' + req.getName());
        } else {
            this.nextWorker.assignWork(req);
        }
    }
}

class MediumLevelWorkHandler extends Handler {
    constructor() {
        super();
        this.nextWorker = new Handler();
    }

    assignWork(req) {
        if ("Medium" == req.getCompetition()) {
            console.log(req.getCompetition() + ' work assigned to: ' + req.getName());
        } else {
            this.nextWorker.assignWork(req);
        }
    }
}
class HardLevelWorkHandler extends Handler {
    constructor() {
        super();
        this.nextWorker = new Handler();
    }

    assignWork(req) {
        if ("Hard" == req.getCompetition()) {
            console.log(req.getCompetition() + ' work assigned to: ' + req.getName());
        } else {
            this.nextWorker.assignWork(req);
        }
    }
}

var w1 = new EasyLevelWorkHandler();
var w2 = new MediumLevelWorkHandler();
var w3 = new HardLevelWorkHandler();
w1.setNextEmp(w2);
w2.setNextEmp(w3);

const emp1 = new Employee("Joe","Easy")
const emp2 = new Employee("Anne","Medium")
const emp3 = new Employee("Shawn","Hard")

w1.assignWork(emp1);
w1.assignWork(emp2);
w1.assignWork(emp3);



