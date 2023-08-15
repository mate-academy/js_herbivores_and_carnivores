'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      Animal.alive = Animal.alive.filter((animal) => {
        if (animal === target) {
          return animal.health > 0;
        }

        return true;
      });
    }
  }

  die() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name);
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
