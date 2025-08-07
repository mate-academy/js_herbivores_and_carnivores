'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(pray) {
    if (pray instanceof Herbivore && !pray.hidden) {
      pray.health -= 50;
    }

    if (pray.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== pray);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
