'use strict';

class Animal {
  // write your code here

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden ? this.hidden = false : this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(who) {
    if (who.hidden === false) {
      who.health -= 50;
    }

    if (who.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(who), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
