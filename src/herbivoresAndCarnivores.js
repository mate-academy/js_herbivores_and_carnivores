'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  die() {
    this.health = 0;
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;

    return `${this.name} is now hidden from carnivores.`;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, biteDamage = 50) {
    super(name);
    this.biteDamage = biteDamage;
  }

  bite(herbivore) {
    if (herbivore && herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= this.biteDamage;

      if (!herbivore.isAlive()) {
        herbivore.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
