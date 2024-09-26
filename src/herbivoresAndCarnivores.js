'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden = false;
  type = 'Herbivore';

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  type = 'Carnivore';

  bite(animal) {
    if (animal instanceof Herbivore
      && !animal.hidden
      && animal.health > 0) {
      animal.health -= 50;
      Animal.alive = Animal.alive.filter(animals => animals.health > 50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
