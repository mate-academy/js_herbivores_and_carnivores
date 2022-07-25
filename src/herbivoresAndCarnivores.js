'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  updateAnimalList() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(someone) {
    if (someone instanceof Herbivore && someone.hidden === false) {
      someone.health -= 50;
    }

    if (someone.health === 0) {
      this.updateAnimalList();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
