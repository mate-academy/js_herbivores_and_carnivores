'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.birth();
  }

  birth() {
    Animal.alive.push(this);
  }

  death() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
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
  bite(victim) {
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= 50;
    };

    if (victim.health === 0) {
      this.death();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
