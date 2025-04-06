'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    return (this.hidden = true);
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden === true) {
      return;
    }

    target.health -= 50;

    Animal.alive = Animal.alive.filter((beast) => beast.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
