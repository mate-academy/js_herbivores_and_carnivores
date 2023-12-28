'use strict';

const FULL_HP = 100;
const DAMAGE = 50;
const DEATH_HP = 0;

class Animal {
  // write your code here

  constructor(name, health = FULL_HP) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
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
  // write your code here
  constructor(name, health = FULL_HP) {
    super(name, health);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DAMAGE;

      if (animal.health === DEATH_HP) {
        Animal.alive = Animal.alive.filter(anim => anim !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
