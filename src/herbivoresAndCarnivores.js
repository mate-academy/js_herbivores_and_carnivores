'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static updateAliveList() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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
    // if (!(target instanceof Carnivore) && target.hidden !== true) {
    //   target.health -= 50;
    //   Animal.updateAliveList();
    // }

    if (target instanceof Herbivore && target.hidden !== true) {
      target.health -= 50;
      Animal.updateAliveList();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
