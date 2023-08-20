'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
  die() {
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
  bite(animal) {
    if (!animal.hidden && Herbivore.prototype.isPrototypeOf(animal)) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
