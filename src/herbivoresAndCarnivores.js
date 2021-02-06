'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(creature => creature.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
