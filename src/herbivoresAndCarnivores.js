'use strict';

class Animal {
  // write your code here

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super();
    this.name = name;
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super();
    this.name = name;
  }
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

    const checkAnimal = Animal.alive.filter(item => item.health > 0);

    Animal.alive = checkAnimal;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
