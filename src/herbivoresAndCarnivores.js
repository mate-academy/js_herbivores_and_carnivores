'use strict';
class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(animal) {
    const canBeBitten = animal instanceof Herbivore && animal.hidden === false;

    if (canBeBitten) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive = [
        ...Animal.alive.filter((creature) => creature.health > 0),
      ];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
