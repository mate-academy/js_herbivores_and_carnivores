'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }

    target.health -= 50;

    Animal.alive = Animal.alive.filter((animal) => animal !== target);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
