'use strict';

const HEALTH = 100;
const BITE = 50;

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = HEALTH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = HEALTH, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if ((animal instanceof Herbivore) && !animal.hidden) {
      animal.health -= BITE;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(beast => beast.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
