'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health, hidden);

    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  };

  bite(otherAnimal) {
    if (otherAnimal instanceof Herbivore && otherAnimal.hidden === false) {
      otherAnimal.health -= 50;
    }

    if (otherAnimal.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== otherAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
