'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    if (!Animal.alive) {
      Animal.alive = [];
    }
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
