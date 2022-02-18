import { SpaceLocation } from './SpaceLocation'

// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// let spacecraftName: string = 'Determination'
// let speedMph: number = 17500
let kilometersToMars: number = 225000000
let kilometersToTheMoon: number = 384400
// let milesPerKilometer: number = 0.621

// Part 1: Declare (5) Variables With Type
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;

// console.log(`It will take ${spacecraftName} ${daysToMars} days to journey to Mars`)


// Part 2: Print Days to Mars
function getDaysToLocation(kilometersAway: number, milesPerKilometer: number, speedMph: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hoursAway: number = milesAway / speedMph;
    let daysToDestination: number = hoursAway / 24;

    return daysToDestination;
}


// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621
    name: string
    speedMph: number

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursAway: number = milesAway / this.speedMph;
        let daysToDestination: number = hoursAway / 24;
    
        return daysToDestination;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
    
}


// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);


// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(`It would take ${spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars))} days to get the ${spaceShuttle.name} to Mars, according to my calculations`)
console.log(`It would take ${spaceShuttle.printDaysToLocation(new SpaceLocation('Moon', kilometersToTheMoon))} days to get the ${spaceShuttle.name} to the Moon, according to my calculations`)



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
