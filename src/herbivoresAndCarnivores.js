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
  bite(object) {
    if (object.hidden === false) {
      object.health -= 50;
    }

    if (object.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(object, 1));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
