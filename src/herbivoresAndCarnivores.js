'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static animalDead() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden && target.health !== 0) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.animalDead();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
