'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

const animals = Animal.alive;

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    animals.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    animals.push(this);
  }
  bite(target) {
    if (!(target instanceof Carnivore) && target.hidden === false) {
      target.health -= 50;
    }

    if (target.health === 0) {
      animals.splice(animals.indexOf(target), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
