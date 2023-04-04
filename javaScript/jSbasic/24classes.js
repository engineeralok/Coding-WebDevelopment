class car {
    constructor (name,year) {
        this.name = name;
        this.year = year;
    }
}

const myCar = new car("maruti",2016);
const myCar1 = new car("suzuki",2021);
document.getElementById("demo").innerHTML = myCar.name + " " + myCar.year;
document.getElementById("demo1").innerHTML = myCar1.year + " " + myCar1.name;


class audi {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    age (){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myAudi = new audi("audi s Class",2016);
document.getElementById("demo2").innerHTML = "The age of my audi is" + " " + myAudi.age(); 