'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static removeDead(deadAnimal) {
    Animal.alive = Animal.alive.filter(
      (animal) => animal.name !== deadAnimal.name
    );
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
  };
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb instanceof Herbivore && herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      Animal.removeDead(herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
