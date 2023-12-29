'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(this);
  }
  static removeDead(animal) {
    Animal.alive = Animal.alive.filter((aliveAnimal) => aliveAnimal !== animal);
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
  bite(targetAnimal) {
    if (targetAnimal instanceof Carnivore
      || (targetAnimal instanceof Herbivore && targetAnimal.hidden)) {
      return;
    }

    targetAnimal.health -= 50;

    if (targetAnimal.health <= 0) {
      Animal.removeDead(targetAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
