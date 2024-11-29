'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(object) {
    if (object instanceof Herbivore && !object.hidden) {
      object.health -= 50;
    }

    if (object.health <= 0) {
      const deadAnimal = Animal.alive.findIndex((victim) => victim.health <= 0);

      Animal.alive.splice(deadAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
