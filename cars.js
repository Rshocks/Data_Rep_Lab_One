//start class
class Vehicle
{
    constructor(make, model, year)//con start
    {
        //local Variables
        this.make = make;
        this.model = model;
        this.year = year;

    } //con end

    Info()
    {
        console.log(`Make: ${this.make} `); // logs info to console
        console.log(`Model: ${this.model}`);
        console.log(`Year:${this.year}`);
    }

}//end class Vehilce 

//Class Car start
class cars extends Vehicle
{
    //con start cars
    constructor(make, model, year, doors)
    {
        super(make, model, year); // access info from parent to child
        this.doors = doors;
    }// con end cars

    Info()
    {
        super.Info();
        console.log(`Doors: ${this.doors}`); // log info of doors on child
    }

}// end class cars

let myCar = new cars('Audi', 'A4', 2011, 4); //inputted info about the car
myCar.Info(); 