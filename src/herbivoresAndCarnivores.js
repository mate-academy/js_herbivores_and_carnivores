'use strict';

class Animal {
  static alive = [];

  constructor (name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor (name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide () {
    this.hidden = true;
  }
}

class Carnivore extends Herbivore {
  constructor (name, health, hidden = false) {
    super(name, health, hidden);
  }

  bite (animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(a => a.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore
};
