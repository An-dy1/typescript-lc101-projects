import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    }
    return false;
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    }
    return false;
  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  currentMassKg(): number {
    let cargoItemsTotalWeight = this.sumMass(this.cargoItems);
    let astronautItemsTotalWeight = this.sumMass(this.astronauts);
    return cargoItemsTotalWeight + astronautItemsTotalWeight;
  }

  sumMass(items: Payload[]): number {
    let totalWeight: number = 0;
    for (let i = 0; i < items.length; i++) {
      totalWeight += items[i].massKg;
    }
    return totalWeight;
  }
}
