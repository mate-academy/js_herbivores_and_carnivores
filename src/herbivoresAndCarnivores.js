'use strict';

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    };

    Animal.alive = Animal.alive.filter(item => item.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
