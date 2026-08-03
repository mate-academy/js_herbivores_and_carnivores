'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(target), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
