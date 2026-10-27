'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(meat) {
    if (meat instanceof Herbivore && meat.hidden === false) {
      meat.health -= 50;

      if (meat.health <= 0) {
        Animal.alive = Animal.alive.filter((x) => x !== meat);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
