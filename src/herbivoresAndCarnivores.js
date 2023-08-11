'use strict';

class Animal {
  // write your code here
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(health, name) {
    super(100, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(100, name);
  }

  bite(herbivoreobj) {
    if (herbivoreobj.hidden === false && herbivoreobj instanceof Herbivore) {
      herbivoreobj.health -= 50;

      if (herbivoreobj.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== herbivoreobj);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
