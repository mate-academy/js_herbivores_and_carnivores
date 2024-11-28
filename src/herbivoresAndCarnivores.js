/* eslint-disable no-useless-constructor */
'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeDead(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false, health = 100) {
    super(name, health);
    this.hidden = hidden;

    if (this.health <= 0) {
      Animal.removeDead(this);
    }
  }

  hide() {
    this.hidden = true;
  }

  takeDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      Animal.removeDead(this);
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore) {
      if (!target.hidden) {
        target.takeDamage(50);
      } else {
      }
    } else {
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
