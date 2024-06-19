'use strict';

const HEALTH = 100;
const BITE = 50;
const DEAD = 0;

class Animal {
  static alive = [];

  constructor(name, health = HEALTH) {
    this.name = name;
    this.health = health;
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= BITE;
      Animal.alive = Animal.alive.filter((a) => a.health > DEAD);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
