'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj instanceof Herbivore && obj.hidden === false) {
      obj.health -= 50;
      Animal.alive = Animal.alive.filter((elem) => elem.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
