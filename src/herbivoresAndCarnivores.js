'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
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
