'use strict';

class Animal {
  // static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
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
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
