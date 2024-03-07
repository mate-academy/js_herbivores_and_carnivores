'use strict';

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

Animal.deleteDead = function(dead) {
  for (let i = 0; i < Animal.alive.length; i++) {
    if (Animal.alive[i].name === dead) {
      Animal.alive.splice(i, 1);
    }
  }
};

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(victim) {
    if (victim.hasOwnProperty('hidden') && victim.hidden === false) {
      const damage = victim.health - 50;

      victim.health = damage;

      if (victim.health === 0) {
        Animal.deleteDead(victim.name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
