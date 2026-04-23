'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }

  static alive = [];
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(bitedAnimal) {
    if (bitedAnimal instanceof Herbivore && !bitedAnimal.hidden) {
      bitedAnimal.health -= 50;
    }

    if (bitedAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== bitedAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
