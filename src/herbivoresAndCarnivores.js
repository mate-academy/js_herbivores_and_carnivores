'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    if (!Animal.alive) {
      Animal.alive = [];
    }
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
    if (!(target instanceof Carnivore) && target.hidden !== true) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.alive = Animal.alive.filter((element) => element.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
