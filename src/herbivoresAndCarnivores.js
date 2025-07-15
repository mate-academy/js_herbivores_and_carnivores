'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }
}
class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(name) {
    if (!(name instanceof Herbivore) || name.hidden) {
      return;
    }

    name.health -= 50;

    if (name.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
