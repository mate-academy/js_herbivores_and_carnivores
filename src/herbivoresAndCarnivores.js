'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbi) {
    if (herbi.hidden === false && herbi instanceof Herbivore) {
      herbi.health -= 50;
    }

    if (herbi.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== herbi);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
