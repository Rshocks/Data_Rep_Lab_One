//class start
class BMI
{
    // constructor data initialise
    constructor(height, weight)
    {
        //local variables 
        this.height = height;
        this.weight = weight;

    }// end constructor

    //calculate BMI
    calBMI()
    {
        let bmi = this.weight/(this.height**2); // let over var takes scope into account
        return bmi; //returns the calculated bmi

    }//end calBMI

}// end class

let myBMI = new BMI(1.50, 60); // height and weight inputed here
let cal = myBMI.calBMI();
console.log(cal); // outputs calculation 