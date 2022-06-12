'use strict';

// class Animal {

// }
// Animal.alive = [];

// Animal.constructor(name, health = 100) {
//   this.name = name;
//   this.health = health;
//   this.hidden = false;
//   this.alive.push(this);
// }
class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      const newAnimals = Animal.alive.filter(animal => animal !== victim);

      Animal.alive = newAnimals;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
