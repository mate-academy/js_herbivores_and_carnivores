'use strict';

class Animal {
   constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {

  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
