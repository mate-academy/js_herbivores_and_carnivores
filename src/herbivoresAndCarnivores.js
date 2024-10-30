'use strict';

class Animal {
  static alive = [];

  static checkDead() {
    Animal.alive = Animal.alive.filter((animal) => {
      return animal.health > 0;
    });
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
      Animal.checkDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
