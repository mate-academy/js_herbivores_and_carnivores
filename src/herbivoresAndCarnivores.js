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
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }
  bite(obj) {
    if (obj.hidden === false) {
      obj.health -= 50;
    }
    Animal.alive = Animal.alive.filter((aliveObj) => aliveObj.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
