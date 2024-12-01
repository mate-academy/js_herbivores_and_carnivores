'use strict';

class Animal {
  // write your code here
  constructor(name, health) {
    this.health = health || 100;
    this.name = name;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

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
  bite(aniObj) {
    if (aniObj.hidden === false && aniObj instanceof Herbivore) {
      aniObj.health -= 50;

      if (aniObj.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== aniObj);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
