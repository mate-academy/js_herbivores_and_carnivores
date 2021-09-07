'use strict';

class Animal {
  // write your code here
  static exist = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.exist.push(this);
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
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    Animal.exist = Animal.exist.filter(beast => beast.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
