'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
  static alive = [];
  static clearHungerGameStat() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;

  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (target.hidden === false) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.clearHungerGameStat();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
