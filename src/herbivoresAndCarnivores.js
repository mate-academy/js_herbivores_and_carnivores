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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    this.addBeast(this);
  }
  hide() {
    this.hidden = true;
    this.addBeast(this);
  }

  addBeast(obj) {
    Animal.alive.push(obj);
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(obj) {
    if (!obj.hidden && obj instanceof Herbivore) {
      obj.health -= 50;
    }

    Animal.alive = Animal.alive.filter(elem => {
      return !elem.health === 0 && !elem.hidden;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
