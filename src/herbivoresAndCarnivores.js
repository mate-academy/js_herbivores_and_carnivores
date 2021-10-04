'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  // static cleanList() {
  //   Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  // }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  };
}

class Carnivore extends Animal {
  bite(prey) {
    if (!(prey instanceof Carnivore) && prey.hidden === false) {
      prey.health -= 50;
    }
    // Animal.cleanList();

    if (prey.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.name !== prey.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
