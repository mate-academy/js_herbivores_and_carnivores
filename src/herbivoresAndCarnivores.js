'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  updateHealth(amount) {
    this.health += amount;
  }

  static cleanup() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
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
  bite(target) {
    if (!(target instanceof Herbivore)) return;
    if (target.hidden) return;
    target.updateHealth(-50);
    Animal.cleanup();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
