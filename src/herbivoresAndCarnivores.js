'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }

  // kill() {
  //   Animal.alive = Animal.alive.filter(beast => beast.health < 0);
  // }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // constructor(health, name) {
  //   super(health, name);
  // }

  bite(animal) {
    if (animal instanceof Carnivore && !animal.hidden) {
      // return;
      animal.health -= 50;
    }

    // animal.health -= 50;

    // if (animal.health <= 0) {
    //   animal.kill();
    // }
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(beast => beast !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
