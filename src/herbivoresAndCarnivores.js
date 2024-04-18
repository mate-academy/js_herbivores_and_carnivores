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
  constructor(name, hidden = false) {
    super(name);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
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
