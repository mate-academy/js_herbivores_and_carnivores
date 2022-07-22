'use strict';

class Animal {
  static alive = [];

  static increase(animal) {
    this.alive.push(animal);
  }
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.increase(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.increase(this);
  }

  bite(beast) {
    if (beast.hidden === true || beast instanceof Carnivore) {
      return beast.health;
    } else {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      const dead = Animal.alive.indexOf(beast);

      Animal.alive.splice(dead, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
