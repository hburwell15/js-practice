/*Use the class keyword to create a `Thermostat` class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter that accepts a temperature in Celsius.*/


// Only change code below this line
class Thermostat {
    constructor(temp) {
        this._temp = 5/9 * (temp - 32);
    }
    get temperature(){
        return this._temp;
    }
    set temperature(updatedTemp){
        this._temp = updatedTemp;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius