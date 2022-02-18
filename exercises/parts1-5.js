"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// let spacecraftName: string = 'Determination'
// let speedMph: number = 17500
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// let milesPerKilometer: number = 0.621
// Part 1: Declare (5) Variables With Type
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;
// console.log(`It will take ${spacecraftName} ${daysToMars} days to journey to Mars`)
// Part 2: Print Days to Mars
function getDaysToLocation(kilometersAway, milesPerKilometer, speedMph) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hoursAway = milesAway / speedMph;
    var daysToDestination = hoursAway / 24;
    return daysToDestination;
}
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursAway = milesAway / this.speedMph;
        var daysToDestination = hoursAway / 24;
        return daysToDestination;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("It would take ".concat(spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars)), " days to get the ").concat(spaceShuttle.name, " to Mars, according to my calculations"));
console.log("It would take ".concat(spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Moon', kilometersToTheMoon)), " days to get the ").concat(spaceShuttle.name, " to the Moon, according to my calculations"));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
