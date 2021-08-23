'use strict';

class Animal {
  // write your code here

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
  // як записати створені обєкти в метод?
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

  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      return Animal.alive.splice(beast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
