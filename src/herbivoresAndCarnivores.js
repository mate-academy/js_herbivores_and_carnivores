'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
  static removeAnimal(dead) {
    this.alive = this.alive.filter(animal => animal !== dead);
  }
}
Animal.alive = [];
class Herbivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }
  bite(kind) {
    if (kind instanceof Herbivore && !kind.hidden) {
      kind.health -= 50;
    }

    if (kind.health === 0) {
      Animal.removeAnimal(kind);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
