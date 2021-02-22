'use strict';

class Animal {
  constructor(creature) {
    this.name = creature;
    this.health = 100;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(creature) {
    super(creature);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden === true && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(
        individual => individual.health !== 0
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
