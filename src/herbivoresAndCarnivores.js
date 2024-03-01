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
    if (target instanceof Herbivore && target.hidden !== true) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((elem) => elem !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
