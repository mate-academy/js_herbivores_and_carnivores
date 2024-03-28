'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health = 100);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health = 100);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    } else {
      return `${this.name} cannot bite ${target.name}.`;
    }
  }

}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
