"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.currentMassKg = function () {
        var cargoItemsTotalWeight = this.sumMass(this.cargoItems);
        var astronautItemsTotalWeight = this.sumMass(this.astronauts);
        return cargoItemsTotalWeight + astronautItemsTotalWeight;
    };
    Rocket.prototype.sumMass = function (items) {
        var totalWeight = 0;
        for (var i = 0; i < items.length; i++) {
            totalWeight += items[i].massKg;
        }
        return totalWeight;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
