'use strict';

class Animal {
  static alive = [];
  static FULL_HEALTH = 100;

  constructor(name) {
    this.name = name;

    this.health = Animal.FULL_HEALTH;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  static HIDDEN = false;

  constructor(name) {
    super(name);

    this.health = Herbivore.FULL_HEALTH;
    this.hidden = Herbivore.HIDDEN;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    this.health = Carnivore.FULL_HEALTH;
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter((live) => live.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
