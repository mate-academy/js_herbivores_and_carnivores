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
    const isHerbivoreVisible
      = animal instanceof Herbivore && animal.hidden === false;

    if (isHerbivoreVisible) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const indexOfDeadAnimal = Animal.alive.findIndex(
        (deadAnimal) => deadAnimal.health === 0
      );

      Animal.alive.splice(indexOfDeadAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
