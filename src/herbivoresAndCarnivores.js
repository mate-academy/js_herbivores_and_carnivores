'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.role = 'herbivore';
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.role = 'carnivore';
  }

  bite(somebody) {
    if (somebody.role !== 'carnivore'
    && somebody.hidden === false) {
      somebody.health -= 50;
    }

    if (somebody.health <= 0) {
      for (let i = 0; i < Animal.alive.length; i++) {
        if (Animal.alive[i].name === somebody.name) {
          delete Animal.alive[i];
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
