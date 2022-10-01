'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100, hidden = false) {
    this.health = health;
    this.name = name;
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  // write your code here
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal.hidden === true) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(el => el.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
