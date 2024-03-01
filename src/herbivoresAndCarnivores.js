'use strict';

class Animal {
  static DEFAULT_HEALTH = 100;
  static DEFAULT_DAMAGE = 50;
  static alive = [];

  constructor(name, health = Animal.DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= Animal.DEFAULT_DAMAGE;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive
          .filter(aliveAnimal => aliveAnimal !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
