'use strict';

class Animal {
  constructor(health, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  static removeDeadAnimal() {
    Animal.alive = Animal.alive.filter((item) => item.health !== 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
  }

  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.removeDeadAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
