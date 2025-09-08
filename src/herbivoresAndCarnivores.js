'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  takeDamage(damage = 50) {
    this.health -= damage;

    if (this.health <= 0) {
      return this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
  bite(herbivoreObj) {
    if (
      herbivoreObj instanceof Herbivore &&
      !herbivoreObj.hidden &&
      herbivoreObj.health > 0
    ) {
      herbivoreObj.takeDamage(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
