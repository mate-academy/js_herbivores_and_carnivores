'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100, hidden) {
    this.name = name;
    this.health = health;
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
  bite(obj) {
    if (obj instanceof Herbivore && obj.hidden !== true) {
      obj.health -= 50;
    }

    if (obj.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
