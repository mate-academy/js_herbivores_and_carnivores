'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static updateAliveList() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
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
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        Animal.updateAliveList();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
