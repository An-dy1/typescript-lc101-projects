"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        ;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var astronautMass = this.sumMass(this.astronauts);
        var cargomass = this.sumMass(this.cargoItems);
        return astronautMass + cargomass;
    };
    Rocket.prototype.canAdd = function (item) {
        // if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
        //   return true;
        // } else {
        //   return false;
        // }
        // console.log(`current mass: ${this.currentMassKg()}\nitem mass: ${item.massKg}\ntotal capacity: ${this.totalCapacityKg}`)
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
