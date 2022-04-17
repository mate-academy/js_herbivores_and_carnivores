'use strict';

class Animal {
  // static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(victim) {
    if (victim.hidden !== undefined && victim.hidden === false) {
      victim.health -= 50;

      if (victim.health <= 0) {
        for (let i = 0; i < Animal.alive.length; i++) {
          if (Animal.alive[i] === victim) {
            Animal.alive.splice(i, 1);
          }
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
