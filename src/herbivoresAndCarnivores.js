'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeByName(animalName) {
    Animal.alive = Animal.alive.filter(x => x.name !== animalName);
  }

  static checkHealth(herbivore) {
    if (herbivore.health === 0) {
      Animal.removeByName(herbivore.name);
    }
  }
}

class Herbivore extends Animal {
  // write your code here

  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    Animal.checkHealth(herbivore);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
