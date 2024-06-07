'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static delleteDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}
class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (
      target instanceof Carnivore ||
      (target instanceof Herbivore && target.hidden)
    ) {
      return `${this.name} can't bite ${target.name}`;
    } else {
      target.health -= 50;
      Animal.delleteDeadAnimals();

      return `${this.name} bit ${target.name}`;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
