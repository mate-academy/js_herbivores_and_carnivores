'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeIfDead(instance) {
    if (instance.health <= 0) {
      Animal.alive = Animal.alive.filter(a => a !== instance);
    }
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      Animal.removeIfDead(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
