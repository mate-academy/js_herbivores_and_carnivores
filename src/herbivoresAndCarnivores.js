'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (health > 0) {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal.hidden === true || !(animal instanceof Herbivore)
    || animal.health <= 0) {
      // eslint-disable-next-line no-console
      console.error('This animal can not be bitten');

      return;
    }
    animal.health -= 50;

    if (animal.health > 0) {
      return;
    }

    const index = Animal.alive.indexOf(animal);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
