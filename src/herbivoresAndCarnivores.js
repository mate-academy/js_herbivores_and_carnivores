'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(anyAnim) {
    if (anyAnim instanceof Herbivore && anyAnim.hidden === false) {
      anyAnim.health -= 50;
    }

    if (anyAnim.health <= 0) {
      Animal.alive = Animal.alive.filter(x => x !== anyAnim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
